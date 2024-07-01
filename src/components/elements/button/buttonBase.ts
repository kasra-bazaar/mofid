import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  ["button", "inline-flex justify-center items-center"],
  {
    variants: {
      size: {
        normal: "px-3 py-1.5 text-sm leading-6 rounded-md",
        large: "px-4 py-1.5 text-base leading-7 rounded-md",
      },
      variant: {
        outlined: "ring-1",
        contained: "text-white shadow-sm ring-1",
      },
      color: {
        gray: "",
        danger: "",
        primary: "",
        success: "",
      },
    },
    compoundVariants: [
      // contained
      {
        color: "primary",
        variant: "contained",
        class:
          "bg-teal-600 ring-teal-600 hover:bg-teal-700 hover:ring-teal-700",
      },
      {
        color: "success",
        variant: "contained",
        class:
          "bg-green-600 ring-green-600 hover:bg-green-700 hover:ring-green-700",
      },
      {
        color: "danger",
        variant: "contained",
        class: "bg-red-600 ring-red-600 hover:bg-red-700 hover:ring-red-700",
      },
      {
        color: "gray",
        variant: "contained",
        class:
          "bg-gray-600 ring-gray-600 hover:bg-gray-700 hover:ring-gray-700",
      },
      // outlined
      {
        color: "primary",
        variant: "outlined",
        class: "text-teal-900 ring-teal-900/10 hover:ring-teal-900/20",
      },
      {
        color: "success",
        variant: "outlined",
        class: "text-green-900 ring-green-900/10 hover:ring-green-900/20",
      },
      {
        color: "danger",
        variant: "outlined",
        class: "text-red-900 ring-red-900/10 hover:ring-red-900/20",
      },
      {
        color: "gray",
        variant: "outlined",
        class: "text-gray-900 ring-gray-900/10 hover:ring-gray-900/20",
      },
    ],
    defaultVariants: {
      size: "normal",
      color: "primary",
      variant: "contained",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export const buttonBaseClasses = (variants: ButtonVariants) =>
  twMerge(buttonVariants(variants));

export type ButtonBaseProps = ButtonVariants & {
  // nodes
  children?: React.ReactNode;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
};
