interface RemoteApplicationDocumentCredential {
  id: XmlElem<number>;
}

type RemoteApplicationDocumentTopElem = XmlTopElem & { Doc: RemoteApplicationDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  app_id: XmlElem<string>;
  credentials: XmlMultiElem<RemoteApplicationDocumentCredential>;
  access: XmlElem<AccessBase>;
  category_id: XmlMultiElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type RemoteApplicationDocument = XmlDocument & { TopElem: RemoteApplicationDocumentTopElem; };
