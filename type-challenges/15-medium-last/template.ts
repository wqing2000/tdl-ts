type Last<T extends any[]> = T extends [...infer rest, infer Z] ? Z : never;
