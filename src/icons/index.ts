import ChevronLeft from "./chevron-left-icon";
import Check from "./check-icon";
import CheckCircle from "./check-circle-icon";
import ClearCircle from "./clear-circle-icon";
import Clear from "./clear-icon";
import Edit from "./edit-icon";
import Settings from "./settings-icon";
import User from "./user-icon";
import Warning from "./warning-icon";
import ArrowRight from "./arrow-right-icon";

export const ICONS = {
  ChevronLeft,
  Check,
  CheckCircle,
  Clear,
  ClearCircle,
  Edit,
  Settings,
  User,
  Warning,
  ArrowRight,
};

type IconsType = typeof ICONS;
export type IconType = keyof IconsType;
