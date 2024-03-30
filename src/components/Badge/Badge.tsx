import React from "react";
export interface BadgeProps {
  label: string;
}
const Badge = (props: BadgeProps) => {
  const { label } = props;
  return (
    <div className="w-50 h-18 text-center rounded-10 text-gray-400 font-semibold bg-gray-100 text-12">
      {label}
    </div>
  );
};

export default Badge;
