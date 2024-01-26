type XmlTopElemBase = {
  TopElem: unknown
};

type InferXmlElemFirst<T> = T extends XmlElem<infer P, unknown, unknown> ? P : never;
type InferXmlElemForeignElem<T> = T extends XmlElem<unknown, infer P, unknown> ? P : never;

type toXmlElem<T extends object, Document = never> = {
  [Property in keyof T]:
  T[Property] extends XmlElem<unknown, unknown, unknown>
  ? XmlElem<InferXmlElemFirst<T[Property]>, InferXmlElemForeignElem<T[Property]>, Document>
  : T[Property] extends XmlMultiElem<unknown, unknown, unknown>
  ? XmlMultiElem<InferXmlElemFirst<T[Property]>, InferXmlElemForeignElem<T[Property]>, Document>
  : T[Property];
};


type XmlTopElem<TopElem extends object, Document = never> = XmlElem<TopElem, never, Document> & toXmlElem<TopElem, Document>;

type XmlDocumentBase = {
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  DocID: number;
  WriteDocInfo: boolean;
  readonly NeverSaved: boolean;
}

type XmlDocument<T extends XmlTopElemBase> = XmlDocumentBase & T;