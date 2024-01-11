// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Date { }

interface DateConstructor {
  new(value?: unknown): Date;
  (value?: unknown): Date;
  (): Date;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare let Date: DateConstructor;
