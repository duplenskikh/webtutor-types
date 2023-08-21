// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Date { }

interface DateConstructor {
  new(value?: unknown): Date;
  (value?: unknown): Date;
  (): Date;
}

declare let Date: DateConstructor;
