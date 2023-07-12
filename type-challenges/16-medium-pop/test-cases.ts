import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>,

  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  Expect<Equal<Shift<[]>, []>>,

  Expect<Equal<Push<[3, 2], 1>, [3, 2, 1]>>,
  Expect<Equal<Push<["a", "b", "c"], "d">, ["a", "b", "c", "d"]>>,
  Expect<Equal<Push<[], 1>, [1]>>,

  Expect<Equal<Unshift<[2, 3], 1>, [1, 2, 3]>>,
  Expect<Equal<Unshift<["b", "c", "d"], "a">, ["a", "b", "c", "d"]>>,
  Expect<Equal<Unshift<[], 1>, [1]>>
];
