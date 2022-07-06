type XmlDocument<T> = {
  DocID: number;
  TopElem: XmlTopElem<T>;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

type XmlTopElem<T> = T & {
  Name: string;
  Doc: XmlDocument<T>;
  OptChild(childName: string): any;
  AssignElem(TopElem: XmlTopElem<any>): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
}
