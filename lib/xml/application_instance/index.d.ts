type ApplicationInstanceDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ApplicationInstanceDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.progress_types>;
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ApplicationInstanceDocument = XmlDocument & {
  TopElem: ApplicationInstanceDocumentTopElem;
  application_instance: ApplicationInstanceDocumentTopElem;
  DocDesc(): string;
};
