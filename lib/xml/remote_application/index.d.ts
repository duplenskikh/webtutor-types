interface RemoteApplicationDocumentCredential {
  id: XmlElem<number | null, CredentialCatalogDocumentTopElem>;
}

type RemoteApplicationDocumentTopElem = XmlTopElem & {
  Doc: RemoteApplicationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  app_id: XmlElem<string | null>;
  credentials: XmlMultiElem<RemoteApplicationDocumentCredential | null>;
  access: XmlElem<AccessBase | null>;
  /** Категория */
  category_id: XmlMultiElemObject<string | null, CategoryCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type RemoteApplicationDocument = XmlDocument & {
  TopElem: RemoteApplicationDocumentTopElem;
  remote_application: RemoteApplicationDocumentTopElem;
  DocDesc(): string;
};
