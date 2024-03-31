import SmallChooseButton from "@/components/Button/SmallChooseButton";
import React from "react";

export interface MultipleQuizProps {
  challenge?: [string, string, string, string];
  answer?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const multipleQuiz = (props: MultipleQuizProps) => {
  const { challenge, answer, onClick } = props;

  return (
    <div className="w-full gap-14 grid grid-cols-2">
      {challenge ? (
        challenge.map((challenge, index) => (
          <SmallChooseButton
            label={challenge}
            active={challenge === answer}
            key={index}
            id={`${challenge}_${index}`}
            dataKey={challenge}
            onClick={onClick}
          />
        ))
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default multipleQuiz;
