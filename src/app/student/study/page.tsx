"use client";

import { useState } from "react";

import { Icon } from "@/components/icon";
import Progress from "@/components/Input/Progress";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import MultipleQuiz from "./multipleQuiz";
import Input from "@/components/Input/Input";
import InputTextArea from "@/components/Input/InputTextArea";
import FloatButton from "@/components/Button/FloatButton";

interface QuizServerResult {
  question: string;
  difficulty: "easy" | "normal" | "hard";
  src: string;
  challenge?: [string, string, string, string];
}

const StudyPage = () => {
  const [progress, setProgress] = useState<number>(31);
  // 답 저장
  const [answer, setAnswer] = useState<string>();
  // server data
  const [server, setServer] = useState<QuizServerResult>({
    question: "What is the expression of the person like?",
    difficulty: "easy",
    src: "/images/test.jpeg",
    challenge: ["고양이", "강아지", "돌고래", "범고래"],
  });

  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const { key } = event.currentTarget.dataset;

    setAnswer(key);
  }
  function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = event.target;
    setAnswer(value);
  }

  const handleNextQuiz = () => {};
  console.log("answer", answer);
  return (
    <div className="w-full h-full">
      <div className="w-full px-20">
        <Navigation
          leftItem={
            <button className="w-24 h-24">
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

      <div className="px-20 mt-10">
        <Title label={server.question} />
      </div>

      <img
        src={server.src}
        alt="challenge"
        className="w-full h-250 bg-slate-400 mt-30"
      />

      <div className="w-full px-20 mt-20 ">
        {/* QuizRender */}
        {server.difficulty === "easy" ? (
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
        )}
      </div>

      <FloatButton label={"Next"} onClick={handleNextQuiz} disabled={!answer} />
    </div>
  );
};

export default StudyPage;
