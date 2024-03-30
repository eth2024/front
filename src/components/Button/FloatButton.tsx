import Button from "./Button";

interface FloatButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const FloatButton = ({ label, onClick, disabled }: FloatButtonProps) => {
  return (
    <div className="absolute w-full left-0 bottom-36 px-20">
      <Button label={label} onClick={onClick} disabled={disabled} />
    </div>
  );
};

export default FloatButton;
