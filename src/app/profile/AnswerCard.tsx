import React from "react";
import Card from "./Card";
import ProgressBar from "@/components/Input/Progress";
import { Icon } from "@/components/icon";

const AnswerCard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-28">
        <span className="font-bold text-20">Answer</span>
        <div className="w-24 h-24 ">
          <Icon name="ArrowRight" className="text-gray-300 w-full h-full" />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end">
          <div className="flex items-end gap-1">
            <div className="font-bold text-26 h-35">75</div>{" "}
            <div className="text-19 ">%</div>
          </div>
          <div className="font-bold text-14">
            <span className="text-main">37</span>
            <span>/50</span>
          </div>
        </div>
        <div className="mt-10">
          <ProgressBar progress={75} />
        </div>

        <hr className="my-20" />

        <div className="flex justify-between items-center">
          <div className="flex gap-19">
            <div className="w-60 h-60 rounded-100  ">
              <img src="/images/answer-test.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center text-14">
              <div className="font-bold">앉다</div>
              <div className="line-through text-gray-500">누워있다</div>
            </div>
          </div>
          <div className="w-30 h-30 rounded-100  ">
            <Icon name="ClearCircle" className="text-red w-30 h-30" />
          </div>
        </div>
        <hr className="my-20" />
        <div className="flex justify-between items-center">
          <div className="flex gap-19">
            <div className="w-60 h-60 rounded-100  ">
              <img src="/images/answer-test-2.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center text-14">
              <div className="font-bold">웃다</div>
            </div>
          </div>
          <div className="w-30 h-30 rounded-100  ">
            <Icon name="CheckCircle" className="text-blue w-30 h-30" />
          </div>
        </div>

        <div></div>
      </div>
    </Card>
  );
};

export default AnswerCard;
