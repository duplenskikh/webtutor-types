interface IWTXmlDocument {
  DocID: number;
  TopElem: IWTXmlDocumentTopElem;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

type IWTXmlDocumentTopElem = {
  Name: string;
  Doc: IWTXmlDocument;
  OptChild(childName: string): any;
  AssignElem(TopElem: IWTXmlDocumentTopElem): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
}
