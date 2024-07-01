import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export type PercentageProps = {
  value: number;
};

export const Percentage: React.FC<PercentageProps> = ({ value }) => {
  const isPositive = value > 0;

  return (
    <span
      dir="ltr"
      className={clsx(
        "inline-flex items-center",
        isPositive ? "text-green-400" : "text-red-400"
      )}
    >
      {isPositive ? (
        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      )}
      {isPositive ? value : String(value).replace("-", "")}%
    </span>
  );
};
