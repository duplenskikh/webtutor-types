interface ActiveXObjectConstructor {
  new(name: string): any;
  (name: string): any;
}

declare const ActiveXObject: ActiveXObjectConstructor;
