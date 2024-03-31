"use client";

import { useRouter } from "next/navigation";

import { Icon } from "@/components/icon";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import CardButton from "@/components/Button/CardButton";

import type { ImageCategory } from "@/types";

const StudentHome = () => {
  const router = useRouter();

  const handleClick = (category: ImageCategory) => {
    router.push(`/student/study/${category}`);
  };

  const studyCategory: ImageCategory[] = [
    "animal",
    "vehicle",
    "landscape",
    "fruit",
    "vegitable",
  ];

  return (
    <div className="px-20 w-full h-full">
      <Navigation
        rightItem={
          <button
            type="button"
            className="w-24 h-24"
            onClick={() => router.push("/profile")}
          >
            <Icon name="User" className="text-24" />
          </button>
        }
      />
      <Title label="Please choose a category you want to study!" />
      <main className="w-full py-40">
        <ul className="flex flex-col gap-10 overflow-y-scroll">
          {studyCategory.map((category) => (
            <li key={category}>
              <CardButton
                src={`/images/${category}.png`}
                alt={`${category}_thumbnail`}
                label={category}
                onClick={() => handleClick(category)}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentHome;
