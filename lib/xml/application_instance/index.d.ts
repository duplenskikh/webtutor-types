type ApplicationInstanceDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ApplicationInstanceDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.progress_types>;
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ApplicationInstanceDocument = XmlDocument & {
  TopElem: ApplicationInstanceDocumentTopElem;
  application_instance: ApplicationInstanceDocumentTopElem;
  DocDesc(): string;
};
