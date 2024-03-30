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
    <div className="w-full flex gap-14 flex-wrap">
      {challenge ? (
        challenge.map((challenge, index) => (
          <SmallChooseButton
            innerText={challenge}
            active={challenge === answer}
            key={index}
            id={`${challenge}_${index}`}
            dataKey={challenge}
            onClick={onClick}
          />
        ))
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default multipleQuiz;
