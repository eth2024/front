export type ImageCategory =
  | "animal"
  | "fruit"
  | "landscape"
  | "vegitable"
  | "vehicle";

export type ImageData = {
  id: string;
  url: string;
  confirmed: boolean;
  matched: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
