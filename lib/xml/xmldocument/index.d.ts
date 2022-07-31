interface XmlDocument {
  DocID: number;
  TopElem: XmlTopElem;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

interface XmlTopElem {
  [key: string]: unknown;
  name?: XmlElem<string>;
  Name: string;
  Doc: XmlDocument;
  OptChild(childName: string): any;
  AssignElem(TopElem: XmlTopElem): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
  role_id: XmlMultiElem<number>;
}
