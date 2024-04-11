type _DefaultDb = {
  Name: string;
  UseObjectTypes: boolean;
  UseSqlStorage: boolean;
  UseFtV2: boolean;
  SqlConnection: never;
  IsShared: boolean;
  /**
   * /WebsoftServer/wt_data.
   */
  StorageDirectory: string;
  ObjectForms: unknown[];
  SharedDocs: Object;
  // HostDir: T;
  RegisterObjectType(urlScheme: string): void;
  RegisterCatalog(urlScheme: string): never | undefined;
  OpenObjectDoc(arg1: object, arg2: object): object;
  OpenNewObjectDoc(arg: object): object;
  DeleteObjectDoc(arg: object): object;
  ChangeObjectFields(arg: object): object;
  UpdateObjectSecondaryData(arg: object): object;
  GetObjectForm(arg: object): object;
  GetOptCatalog(arg: object): object;
  GetRecordPrimaryObjectUrl(arg: object): object;
  RunSql(arg: object): object;
};

declare const DefaultDb: _DefaultDb;
