type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
} & {
  [key in keyof T as key extends K ? never : key]: T[key];
};

// 交叉：&
// 交叉类型（Intersection）类似 js 中的与运算符 &，但是作用于类型，代表对类型做合并。

// = : 赋予第二个参数默认值