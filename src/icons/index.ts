import ChevronLeft from "./chevron-left-icon";
import CheckFilled from "./check-filled-icon";
import CheckCircle from "./check-circle-icon";
import Clear from "./clear-icon";
import Edit from "./edit-icon";
import Settings from "./settings-icon";
import User from "./user-icon";
import Warning from "./warning-icon";

export const ICONS = {
  ChevronLeft,
  CheckFilled,
  CheckCircle,
  Clear,
  Edit,
  Settings,
  User,
  Warning,
};

type IconsType = typeof ICONS;
export type IconType = keyof IconsType;
