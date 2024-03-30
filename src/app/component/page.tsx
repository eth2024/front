import React from "react";
import Input from "@/components/Input/Input";
import InputTextArea from "@/components/Input/InputTextArea";
import NextButton from "@/components/Button/NextButton";

const page = () => {
  return (
    <div>
      components
      <Input errorMessage="Please write more concisely" />
      <InputTextArea />
      <NextButton />
    </div>
  );
};

export default page;
