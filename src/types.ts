export type Composition = {
  head: string | string[];
  body: string | string[];
  legs: string | string[];
  accessories?: Record<string, null | string | string[]>,
}
