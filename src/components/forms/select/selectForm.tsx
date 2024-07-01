/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

import type { SelectProps } from "./select";
import { SelectRoot } from "./select";

type ISelectFormProps<T extends number | string> = SelectProps<T> &
  UseControllerProps;
export function SelectForm<T extends number | string>({
  name,
  rules,
  control,
  options,
  onChange,
  defaultValue,
  shouldUnregister,
  ...reset
}: ISelectFormProps<T>) {
  const { field } = useController({
    name,
    rules,
    control,
    defaultValue,
    shouldUnregister,
  });

  const _onChange: ISelectFormProps<T>["onChange"] = (value) => {
    onChange?.(value);
    field.onChange(value);
  };

  return (
    <SelectRoot
      {...reset}
      options={options}
      value={field.value}
      onChange={_onChange}
    />
  );
}
