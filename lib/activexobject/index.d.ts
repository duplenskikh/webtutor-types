interface ActiveXObjectConstructor {
  new(...arg: any): any;
  (...arg: any): any;
}

declare var ActiveXObject: ActiveXObjectConstructor;
