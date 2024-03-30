import { SVGAttributes } from "react";

import { ICONS, IconType } from "@/icons";

export const Icon = ({
  name,
  className,
  strokeWidth,
}: {
  name: IconType;
  className?: SVGAttributes<SVGSVGElement>["className"];
  strokeWidth?: number;
}) => {
  const IconElement = ICONS[name];

  return <IconElement className={className} strokeWidth={strokeWidth} />;
};
