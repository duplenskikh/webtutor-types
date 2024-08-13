type ClVideoCourseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  last_compile_date: XmlElem<Date | null>;
  media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  simple_media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  authors_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  OnBuild(): void;
};
