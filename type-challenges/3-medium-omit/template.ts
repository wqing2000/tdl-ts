type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

// 除了值可以变化，索引也可以做变化，用 as 运算符，叫做`重映射`