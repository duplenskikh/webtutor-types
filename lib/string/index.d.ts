interface String {
  length: number;
  Allocate(stringLength: number): void;
  charAt(index: number): string;
  charCodeAt(index: number): number;
  indexOf(substring: string, startPosition?: number): number;
  lastIndexOf(substring: string, startPosition?: number): number;
  split(value: string): Array<string>;
  slice(start: number, end?: number): string;
  repeat(number: number): string;
}


interface StringConstructor {
  new(value?: any): string;
  (value?: any): string;
  fromCharCode(charCode: number): string;
}

declare var String: StringConstructor;
