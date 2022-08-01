// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Date { }

interface DateConstructor {
  new(value?: any): Date;
  (value?: any): Date;
  (): Date;
}

declare let Date: DateConstructor;
