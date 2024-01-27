type XmlTopElemBase = {
  TopElem: object;
  Parent?: object;
};

type XmlTopElem<TopElem extends object, Document = never> =
  XmlElem<TopElem, never, Document, Document>
  & toInjectedXmlElem<TopElem, Document>;

type XmlDocumentBase = {
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  DocID: number;
  WriteDocInfo: boolean;
  readonly NeverSaved: boolean;
}

type XmlDocument<T extends XmlTopElemBase> = XmlDocumentBase & T;