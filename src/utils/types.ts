import type { AstroClientDirectives } from "astro";

export type PropsWithChildren<P = unknown> = P & { children: any }; // eslint-disable-line @typescript-eslint/no-explicit-any

export type Subset<T extends U, U> = T;

export type ClientDirectives = keyof AstroClientDirectives;
