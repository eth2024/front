"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Icon } from "@/components/icon";
import Progress from "@/components/Input/Progress";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import Input from "@/components/Input/Input";
import MultipleQuiz from "../multipleQuiz";
import InputTextArea from "@/components/Input/InputTextArea";
import FloatButton from "@/components/Button/FloatButton";
import { useGetImage } from "@/state/react-query/image";

import type { ImageCategory, ImageData } from "@/types";

const StudyPage = ({ params }: { params: { category: ImageCategory } }) => {
  const category = params.category;
  const { data } = useGetImage(category);
  const router = useRouter();

  const [progress, setProgress] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [current, setCurrent] = useState<ImageData>();

  const [answer, setAnswer] = useState<string>();
  const isDone = data && count >= data.length;

  function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = event.target;
    setAnswer(value);
  }

  const handleNextQuiz = () => {
    if (!data) return;
    const nextCount = count + 1;

    if (nextCount > data.length) {
      router.push("/");
      return;
    }

    setCount(nextCount);
    setCurrent(data[nextCount]);
    setProgress(nextCount * 10);
    setAnswer("");
  };

  useEffect(() => {
    if (data) setCurrent(data[0]);
  }, [data]);

  return (
    <div className="w-full h-full">
      <div className="w-full px-20">
        <Navigation
          leftItem={
            <button
              type="button"
              className="w-24 h-24"
              onClick={() => router.back()}
            >
              <Icon name="Clear" className="text-28" />
            </button>
          }
          rightItem={
            <div className="w-full flex gap-10 items-center pt-2">
              <Progress progress={progress} />
              <p className="font-bold text-16">{progress}%</p>
            </div>
          }
        />
      </div>

      {!isDone && (
        <div className="px-20 mt-10">
          <Title label={`What is the ${category}\nin the picture?`} />
        </div>
      )}

      {isDone && (
        <div className="flex flex-col h-3/4 items-center justify-center gap-8">
          <Icon name="CheckCircle" className="text-main text-48" />
          <p className="font-bold text-center text-24 leading-28 whitespace-pre">
            {`Your submission\nhas been completed!`}
          </p>
        </div>
      )}

      {current && (
        <div>
          <img
            src={current.url}
            alt="challenge"
            className="w-full h-250 bg-slate-400 mt-30"
          />

          <div className="w-full px-20 mt-20 ">
            <Input
              onChange={onChangeHandler}
              value={answer}
              placeholder="Please enter in Korean words."
            />
            {/* {server.difficulty === "easy" ? (
                <MultipleQuiz
                  challenge={server.challenge}
                  answer={answer}
                  onClick={onClickHandler}
                />
              ) : server.difficulty === "normal" ? (
                <Input
                  onChange={onChangeHandler}
                  placeholder="Please enter in Korean words."
                />
              ) : (
                <InputTextArea
                  onChange={onChangeHandler}
                  placeholder="Please enter in Korean sentence."
                />
              )} */}
          </div>
        </div>
      )}

      <FloatButton
        label={isDone ? "Done" : "Next"}
        onClick={handleNextQuiz}
        disabled={!isDone && !answer}
      />
    </div>
  );
};

export default StudyPage;
