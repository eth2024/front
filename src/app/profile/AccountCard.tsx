import React from "react";
import Card from "./Card";
import Badge from "@/components/Badge/Badge";

const AccountCard = () => {
  return (
    <Card>
      <div className="flex w-full gap-17">
        <div className="w-50 h-50">
          <img src="/images/mask.svg" alt="profile image" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-17 leading-19">Brave Waffle 318</div>
          <div className="flex items-center gap-4">
            <span className="font-14 text-gray-500 font-medium">student</span>
            <Badge label="edit" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AccountCard;
