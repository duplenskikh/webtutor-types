interface DefaultDb {
  Name: string;
  UseObjectTypes: boolean;
  UseSqlStorage: boolean;
  UseFtV2: boolean;
  SqlConnection: never;
  IsShared: boolean;
  /** /WebsoftServer/wt_data. */
  StorageDirectory: string;
  ObjectForms: unknown[];
  SharedDocs: Object;
  // HostDir: T;
  RegisterObjectType(urlScheme: string, object: Object): void;
  RegisterCatalog(urlScheme: string): never | undefined;
  OpenObjectDoc(arg1: object, arg2: object): object;
  OpenNewObjectDoc<T>(objectName: string): T;
  DeleteObjectDoc<T extends XmlDocument>(arg: object): T;
  ChangeObjectFields(arg: object): object;
  UpdateObjectSecondaryData(arg: object): object;
  GetObjectForm(arg: object): object;
  GetOptCatalog<T>(catalogName: string): T;
  GetRecordPrimaryObjectUrl(arg: object): object;
  RunSql(arg: object): object;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const DefaultDb: DefaultDb;
