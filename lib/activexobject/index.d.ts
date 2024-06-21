type ActiveXObjectType = {
  "ADODB.Connection": ADODB.Connection;
  "ADODB.Recordset": ADODB.Recordset;
};

interface ActiveXObjectConstructor {
  new<T extends keyof ActiveXObjectType>(name: T): ActiveXObjectType[T];
  <T extends keyof ActiveXObjectType>(name: T): ActiveXObjectType[T];
}

declare const ActiveXObject: ActiveXObjectConstructor;
