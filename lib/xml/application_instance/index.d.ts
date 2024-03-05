type ApplicationInstanceDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: ApplicationInstanceDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.progress_types>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type ApplicationInstanceDocument = XmlDocument & {
  TopElem: ApplicationInstanceDocumentTopElem;
};
