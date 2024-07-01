import clsx from "clsx";
import React from "react";

import type { ButtonBaseProps } from "./buttonBase";
import { buttonBaseClasses } from "./buttonBase";

export type ButtonRootProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBaseProps;

export const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  (props, ref) => {
    const {
      size,
      color,
      variant,
      children,
      endAdornment,
      startAdornment,
      ...rest
    } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={clsx(
          rest.className,
          buttonBaseClasses({ color, variant, size })
        )}
      >
        {startAdornment}
        {children}
        {endAdornment}
      </button>
    );
  }
);

ButtonRoot.displayName = "Button";
