import { ButtonLink } from "./buttonLink";
import { ButtonRoot } from "./buttonRoot";

export * from "./buttonRoot";
export * from "./buttonBase";
export * from "./buttonLink";

export const Button = Object.assign(ButtonRoot, {
  Link: ButtonLink,
});
