import { Line } from "rc-progress";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <Line
        percent={progress}
        strokeWidth={3}
        trailWidth={3}
        strokeColor="#A752E0"
        trailColor="#F2F4F7"
      />
    </div>
  );
};

export default ProgressBar;
