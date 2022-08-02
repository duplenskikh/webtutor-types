interface ActiveXObjectConstructor {
  new<T = unknown>(name: string): T;
  <T = unknown>(name: string): T;
}

declare const ActiveXObject: ActiveXObjectConstructor;
