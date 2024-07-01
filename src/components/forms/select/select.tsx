import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fragment, useMemo } from "react";

import type { InputVariants } from "../input";
import { inputBaseClasses } from "../input";

export type SelectItem<T extends number | string> = {
  value: T;
  label: string;
  adornment?: React.ReactNode;
};

export type SelectProps<T extends number | string> = {
  value?: T;
  options?: SelectItem<T>[];
  onChange?: (value: T) => void;

  className?: string;
  placeholder?: string;

  // props
  inputButtonProps?: InputVariants;
};

export function SelectRoot<T extends number | string>(props: SelectProps<T>) {
  const { options, value, placeholder, onChange, className, inputButtonProps } =
    props;

  const selectedOption = useMemo(
    () => options?.find((option) => option.value === value),
    [options, value]
  );

  return (
    <Listbox value={selectedOption} onChange={({ value }) => onChange?.(value)}>
      <div className={clsx(className, "relative")}>
        <Listbox.Button
          className={clsx(
            inputBaseClasses(inputButtonProps ?? {}),
            "ltr:pr-10 rtl:pl-10"
          )}
        >
          <span className="flex gap-1 truncate">
            {selectedOption?.label ? (
              <>
                {selectedOption.adornment}
                {selectedOption.label}
              </>
            ) : (
              placeholder
            )}
          </span>
          <span className="pointer-events-none absolute inset-y-0 flex items-center ltr:right-0 ltr:pr-2 rtl:left-0 rtl:pl-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options?.map((option) => (
              <Listbox.Option
                value={option}
                key={option.value}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2 ltr:pr-10 ltr:pl-4 rtl:pl-10 rtl:pr-4",
                    active ? "bg-teal-50 text-teal-900" : "text-gray-900"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        "flex gap-1 truncate",
                        selected ? "font-medium" : "font-normal"
                      )}
                    >
                      {option.adornment}
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 flex items-center text-teal-600 ltr:right-0 ltr:pr-3 rtl:left-0 rtl:pl-3">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
