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
  OpenObjectDoc<T extends XmlDocument>(catalogName: string, id: number): T;
  OpenNewObjectDoc<T extends XmlDocument>(objectName: string): T;
  DeleteObjectDoc(objectName: string, objectId: number, bool?: boolean): void;
  ChangeObjectFields(arg: object): object;
  UpdateObjectSecondaryData(arg: object): object;
  GetObjectForm<T>(name: string): T;
  GetOptCatalog<T>(catalogName: string): T;
  GetRecordPrimaryObjectUrl(object: object): string;
  RunSql(cmd: string): unknown;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const DefaultDb: DefaultDb;
