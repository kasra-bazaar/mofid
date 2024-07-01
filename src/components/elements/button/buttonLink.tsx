import clsx from "clsx";
import type { LinkProps } from "next/link";
import Link from "next/link";
import React from "react";

import type { ButtonBaseProps } from "./buttonBase";
import { buttonBaseClasses } from "./buttonBase";

export type ButtonLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps &
  ButtonBaseProps;

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
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
      <Link
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
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";
