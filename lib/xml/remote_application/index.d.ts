interface RemoteApplicationDocumentCredential {
  id: XmlElem<number | null, CredentialCatalogDocumentTopElem>;
}

type RemoteApplicationDocumentTopElem = XmlTopElem & {
  Doc: RemoteApplicationDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  app_id: XmlElem<string | null>;
  credentials: XmlMultiElem<RemoteApplicationDocumentCredential | null>;
  access: XmlElem<AccessBase | null>;
  category_id: XmlMultiElemObject<string | null, CategoryCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RemoteApplicationDocument = XmlDocument & {
  TopElem: RemoteApplicationDocumentTopElem;
  remote_application: RemoteApplicationDocumentTopElem;
  DocDesc(): string;
};
