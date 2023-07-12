type Pop<T extends any[]> = T extends [...infer rest, infer Z] ? [...rest] : [];

type Shift<T extends any[]> = T extends [infer A, ...infer rest]
  ? [...rest]
  : [];

type Push<T extends any[], V> = T extends [...infer rest] ? [...rest, V] : [V];

type Unshift<T extends any[], V> = T extends [...infer rest]
  ? [V, ...rest]
  : [V];
