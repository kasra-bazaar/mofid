/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import("translation/en.json");

declare interface IntlMessages extends Messages {}
