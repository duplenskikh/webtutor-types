interface ActiveXObjectConstructor {
  new(name: string): any;
  (name: string): any;
}

declare var ActiveXObject: ActiveXObjectConstructor;
