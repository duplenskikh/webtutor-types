interface XmlDocument {
  DocID: number;
  TopElem: XmlTopElem;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

interface XmlTopElem {
  Name: string;
  Doc: XmlDocument;
  OptChild(childName: string): any;
  AssignElem(TopElem: XmlTopElem): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
}
