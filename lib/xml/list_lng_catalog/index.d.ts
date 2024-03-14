type ListLngCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string>;
  short_id: XmlElem<string>;
  name: XmlElem<string>;
  lng_file_url: XmlElem<string>;
  common_url: XmlElem<string>;
  startup_page_document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
};
