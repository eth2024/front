import React from "react";
import Card from "./Card";
import ClaimButton from "@/components/Button/ClaimButton";
import { Icon } from "@/components/icon";

const RewardCard = () => {
  return (
    <Card style={{ paddingBottom: "26px" }}>
      <div className="flex justify-between items-center mb-30">
        <span className="font-bold text-20">Available rewards</span>
        <div className="w-24 h-24 ">
          <Icon name="ArrowRight" className="text-gray-300 w-full h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <div className="w-30 h-30 rounded-[100%] border-solid border-1 flex items-center justify-center">
            <img src="/images/pinklogo.svg" className="w-19 h-19" alt="" />
          </div>
          <div className="flex flex-col h-34 text-14 justify-center">
            <span className="text-gray-500 font-medium">Picademy</span>
            <span className="font-bold">492.9</span>
          </div>
        </div>

        <ClaimButton />
      </div>
    </Card>
  );
};

export default RewardCard;
