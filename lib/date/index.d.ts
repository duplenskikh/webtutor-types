interface Date { }

interface DateConstructor {
  new(value?: any): Date;
  (value?: any): Date;
  (): string;
}

declare var Date: DateConstructor;
