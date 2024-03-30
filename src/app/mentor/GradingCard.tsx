import dayjs from "dayjs";
import Badge from "@/components/Badge/Badge";

interface GradingCardProps {
  id: string;
  img: string;
  category: string;
  question: string;
  answer: string;
  date: Date;
  handleAnswer: (answer: string) => void;
  isWrongAnswer: boolean;
}

const GradingCard = ({
  id,
  img,
  category,
  question,
  answer,
  date,
  handleAnswer,
  isWrongAnswer,
}: GradingCardProps) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-white flex w-full flex-col gap-50 rounded-10 pb-40 overflow-y-scroll">
        <div className="rounded-t-10 overflow-hidden">
          <img src={img} alt="check-img" />
        </div>

        <div className="flex flex-col items-center px-20 text-gray-900">
          <Badge label={category} />
          <p className="font-bold text-22 text-center px-36 py-20 whitespace-pre-line">
            {question}
          </p>
          <div className="w-full font-medium bg-gray-100 border-gray-200 border h-160 flex justify-center items-center rounded-10 text-16">
            <textarea
              className="w-full h-min text-center bg-gray-100 px-20"
              disabled={!isWrongAnswer}
              placeholder="정답을 입력해주세요."
              onChange={(e) => {
                handleAnswer(e.currentTarget.value);
              }}
              value={answer}
            />
          </div>
          <p className="font-medium text-12 leading-14 text-gray-300 pt-10">
            {dayjs(date).format("YYYY.MM.DD HH:MM")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradingCard;
