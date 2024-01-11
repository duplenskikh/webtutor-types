interface IFileStreamOptions {
  ReadCache: boolean;
}

interface FileStream {
  ReadLine(): string;
}

interface FileStreamConstructor {
  new(url: string, options?: IFileStreamOptions): FileStream;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const FileStream: FileStreamConstructor;
