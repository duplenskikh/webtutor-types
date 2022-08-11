interface ActiveXObjectConstructor {
  new<T = any>(name: string): T;
  <T = any>(name: string): T;
}

declare const ActiveXObject: ActiveXObjectConstructor;
