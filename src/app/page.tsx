"use client";

import { useRouter } from "next/navigation";

import { Icon } from "@/components/icon";
import BigChooseButton from "@/components/Button/BigChooseButton";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import FloatButton from "@/components/Button/FloatButton";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [isMentor, setIsMentor] = useState<boolean>(false);

  return (
    <div className="px-20 relative w-full h-full">
      <Navigation
        rightItem={
          <button type="button" className="w-24 h-24">
            <Icon name="User" className="text-24" />
          </button>
        }
      />
      <Title label="What kind of person are you?" />

      <main className="w-full pt-40 flex flex-col gap-20">
        <BigChooseButton
          label={"Student \nwho wants to learn Korean"}
          icon="Edit"
          onClick={() => setIsMentor(false)}
          active={!isMentor}
        />
        <BigChooseButton
          label={"Korean mentor \nwho grades"}
          icon="Check"
          onClick={() => setIsMentor(true)}
          active={isMentor}
        />
      </main>

      <FloatButton
        label="Next"
        onClick={() => router.push(isMentor ? "/mentor" : "/student")}
      />
    </div>
  );
};

export default Home;
