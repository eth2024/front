"use client";

import { useState } from "react";

import { Icon } from "@/components/icon";
import Progress from "@/components/Input/Progress";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";

const StudyPage = () => {
  const [progress, setProgress] = useState<number>(31);

  return (
    <div className="px-20 w-full h-full">
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
      <Title label="Please choose a category you want to study!" />
      <main className="w-full">study page</main>
    </div>
  );
};

export default StudyPage;
