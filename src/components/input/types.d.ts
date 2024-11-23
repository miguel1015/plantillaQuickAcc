import { ChangeEvent } from "react";
import { Control, Schema } from "react-hook-form";
import { InputProps as StandardInputProps } from "../InputAdapter";

export type TInputAdapter = {
  type: string;
  label: string;
  name: string;
  id: string;
  labelColor?: string;
  control: Control<FieldValues>;
  disabled?: boolean;
  isNumberFormat?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isDecimalFormat?: boolean;
  schema?: Schema<FieldValues>;
  error?: FieldError | undefined;
  onBlur?: (e: ChangeEvent) => void;
  customOnChange?: (customEvent: any) => void;
  placeholder?: string;
  value?: string;
  formatNumber?: boolean;
  inputIcon?: Partial<StandardInputProps>;
};
