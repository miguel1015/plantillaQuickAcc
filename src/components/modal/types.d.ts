import { ReactNode } from "react";

export type TModal = {
  state: boolean;
  title?: string;
  children: ReactNode;
  width?: string;
  height?: string;
  overflow?: string;
  padding?: number | "none";
  Border?: number | "none";
  borderRadius?: number | "none";
  handleCloseModal: (value: boolean) => void;
};
