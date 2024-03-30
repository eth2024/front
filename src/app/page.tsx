"use client";

import { Icon } from "@/components/icon";
import BigChooseButton from "@/components/Button/BigChooseButton";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import FloatButton from "@/components/Button/FloatButton";

import useCheckAccount from "./hooks/useCheckAccount";

const Home = () => {
  useCheckAccount();
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
          label={"A student \nwho wantsto learn Korean"}
          icon="Edit"
          active
        />
        <BigChooseButton label={"A Korean mentor \nwho grades"} icon="Check" />
      </main>

      <FloatButton label="Next" onClick={() => {}} />
    </div>
  );
};

export default Home;
