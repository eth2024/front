"use client";

export interface CardButtonProps {
  name?: string;
  label: string;
  src: string;
  alt: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CardButton = (props: CardButtonProps) => {
  const { onClick, label, name, src, alt } = props;

  return (
    <button
      type="button"
      name={name}
      onClick={onClick}
      className={`relative h-174 w-full bg-gray-500 text-black rounded-10`}
    >
      <img src={src} alt={alt} className="w-full h-full rounded-10" />
      <span className="text-white absolute bottom-20 left-20 font-bold">
        {label}
      </span>
    </button>
  );
};

export default CardButton;
