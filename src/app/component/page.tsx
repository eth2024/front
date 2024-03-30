import React from "react";
import Input from "@/components/Input/Input";
import InputTextArea from "@/components/Input/InputTextArea";
import NextButton from "@/components/Button/Button";
import BigChooseButton from "@/components/Button/BigChooseButton";
import SmallChooseButton from "@/components/Button/SmallChooseButton";
import CardButton from "@/components/Button/CardButton";
import Badge from "@/components/Badge/Badge";

const page = () => {
  return (
    <div>
      components
      <Input errorMessage="Please write more concisely" />
      <InputTextArea />
      <NextButton />
      <BigChooseButton icon={"Edit"} innerText="A Korean mentor who grades" />
      <SmallChooseButton innerText="걷다" />
      <CardButton src="images/test.jpeg" alt={"asd"} innerText="kpop" />
      <Badge innerText="kpop" />
    </div>
  );
};

export default page;
