import React from "react";
import Card from "./Card";
import { Icon } from "@/components/icon";

const ScoreCard = () => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <span className="font-bold text-20">채점</span>
          <span className="font-bold text-20 text-main">75개</span>
        </div>

        <div className="w-24 h-24 ">
          <Icon name="ArrowRight" className="text-gray-300 w-full h-full" />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end"></div>
        <hr className="my-20" />

        <div className="flex justify-between items-center">
          <div className="flex gap-19">
            <div className="w-60 h-60 rounded-100  ">
              <img src="/images/answer-test.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center text-14">
              <div className="font-bold">토끼</div>
              <div className="line-through text-gray-500">강아지</div>
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

export default ScoreCard;
