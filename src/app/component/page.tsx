import React from "react";
import Input from "@/components/Input/Input";
import InputTextArea from "@/components/Input/InputTextArea";
import NextButton from "@/components/Button/Button";
import BigChooseButton from "@/components/Button/BigChooseButton";
import SmallChooseButton from "@/components/Button/SmallChooseButton";
import CardButton from "@/components/Button/CardButton";
import Badge from "@/components/Badge/Badge";
import ClaimButton from "@/components/Button/ClaimButton";

const page = () => {
  return (
    <div>
      components
      <Input errorMessage="Please write more concisely" />
      <InputTextArea />
      <NextButton label="Next" />
      <BigChooseButton
        icon={"Edit"}
        label="A Korean mentor who grades"
        active
      />
      <SmallChooseButton label="걷다" />
      <CardButton src="images/test.jpeg" alt={"asd"} label="kpop" />
      <Badge label="kpop" />
      <ClaimButton />
    </div>
  );
};

export default page;
