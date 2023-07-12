// type DeepReadonly<T> =  {
//   readonly [key in keyof T]: T[key] extends Object
//     ? DeepReadonly<T[key]>
//     : T[key];
// };

// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : {
//       readonly [key in keyof T]: DeepReadonly<T[key]>;
//     };

// 基本情况的良好设置：如果 T 不再是对象，递归停止
// type DeepReadonly<T> = keyof T extends never
// 递归情况的良好定义：值 T[k] 总是递归定义。
// { readonly [k in keyof T]: DeepReadonly<T[k]> }

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};
