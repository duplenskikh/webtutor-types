interface FileStream {
  ReadLine(): string;
}

interface FileStreamConstructor {
  new(value?: any): FileStream;
}

declare let FileStream: FileStreamConstructor;
