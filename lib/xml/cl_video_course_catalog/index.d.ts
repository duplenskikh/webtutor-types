type ClVideoCourseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  last_compile_date: XmlElem<Date>;
  media_file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  simple_media_file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  authors_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  OnBuild(): unknown;
};
