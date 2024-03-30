import React from "react";

export interface InputFieldProps {
  style?: React.CSSProperties;
  placeholder?: string;
  value?: string | number | readonly string[];
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  const { style, placeholder, onChange, value, name } = props;

  return (
    <textarea
      style={style}
      name={name}
      className="outline-none rounded-10 resize-none w-full h-250 p-8 border-1 border-solid text-black border-gray-300"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default InputField;
