import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(["input", "inline-flex w-full justify-center"], {
  variants: {
    size: {
      normal: "rounded-md text-sm font-medium px-4 py-2",
    },
    variant: {
      outlined:
        "shadow-sm border focus:ring-offset-2 focus:outline-none focus:ring-2",
    },
    color: {
      primary:
        "border-gray-300 bg-white text-gray-700  hover:bg-gray-50  focus:ring-teal-500 focus:ring-offset-gray-100",
    },
  },
  defaultVariants: {
    size: "normal",
    color: "primary",
    variant: "outlined",
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
export const inputBaseClasses = (variants: InputVariants) =>
  twMerge(inputVariants(variants));

export type InputBaseProps = InputVariants;
