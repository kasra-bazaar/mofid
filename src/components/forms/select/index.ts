import { SelectRoot } from "./select";
import { SelectForm } from "./selectForm";

export * from "./select";
export * from "./selectForm";

export const Select = Object.assign(SelectRoot, {
  Form: SelectForm,
});
