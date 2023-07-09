type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// keyof: 取interface的键后保存为联合类型

// in: 取联合类型的值，主要用于数组和对象的构建
