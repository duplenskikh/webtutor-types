interface RemoteApplicationDocumentCredential {
  id: XmlElem<number, CredentialCatalogDocumentTopElem>;
}

type RemoteApplicationDocumentTopElem = XmlTopElem & {
  Doc: RemoteApplicationDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  app_id: XmlElem<string>;
  credentials: XmlMultiElem<RemoteApplicationDocumentCredential>;
  access: XmlElem<AccessBase>;
  category_id: XmlMultiElemObject<string, CategoryCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RemoteApplicationDocument = XmlDocument & {
  TopElem: RemoteApplicationDocumentTopElem;
};
