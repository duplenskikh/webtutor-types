interface Thread {
  IsRunning: boolean;
  Param: Object;

  EvalCode(code: string): any;
  EvalCodeUrl(url: string): any;
}

interface ThreadConstructor {
  new(...arg: any): Thread;
  (...arg: any): Thread;
}

declare var Thread: ThreadConstructor;
