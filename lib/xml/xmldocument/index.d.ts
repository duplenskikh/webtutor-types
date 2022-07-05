interface IWTXmlDocument<T> {
  DocID: number;
  TopElem: IWTXmlDocumentTopElem<T>;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

type IWTXmlDocumentTopElem<T> = T & {
  Name: string;
  Doc: IWTXmlDocument<T>;
  OptChild(childName: string): any;
  AssignElem(TopElem: IWTXmlDocumentTopElem<any>): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
}
