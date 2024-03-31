"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Icon } from "@/components/icon";
import BigChooseButton from "@/components/Button/BigChooseButton";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import FloatButton from "@/components/Button/FloatButton";
import useCheckAccount from "./hooks/useCheckAccount";

const Home = () => {
  useCheckAccount();
  const router = useRouter();
  const [select, setSelect] = useState<string>();

  function onClickHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(event.currentTarget.name);
    const { name } = event.currentTarget;
    setSelect(name);
  }

  function onFloatButtonClickHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (select === "student") {
      return router.replace("/student/");
    } else {
      router.replace("/mentor/");
    }
  }

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
          name="student"
          active={select === "student"}
          onClick={onClickHandler}
        />
        <BigChooseButton
          label={"A Korean mentor \nwho grades"}
          icon="Check"
          name="mentor"
          active={select === "mentor"}
          onClick={onClickHandler}
        />
      </main>

      <FloatButton
        label="Next"
        onClick={onFloatButtonClickHandler}
        disabled={!select}
      />
    </div>
  );
};

export default Home;
