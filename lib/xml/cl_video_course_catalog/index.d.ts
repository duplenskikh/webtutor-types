type ClVideoCourseCatalogDocumentTopElem = XmlTopElem & { Doc: ClVideoCourseCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  last_compile_date: XmlElem<Date>;
  media_file_id: XmlElem<number>;
  simple_media_file_id: XmlElem<number>;
  authors_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
}

type ClVideoCourseCatalogDocument = XmlDocument & { TopElem: ClVideoCourseCatalogDocumentTopElem; };
