interface ActiveXObjectConstructor {
  new<T>(name: string): T;
  <T>(name: string): T;
}

declare const ActiveXObject: ActiveXObjectConstructor;
