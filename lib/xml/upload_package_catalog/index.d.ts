type UploadPackageCatalogDocumentTopElem = XmlTopElem & { Doc: UploadPackageCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  type: XmlElem<string>;
  file_url: XmlElem<string>;
  package_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

type UploadPackageCatalogDocument = XmlDocument & { TopElem: UploadPackageCatalogDocumentTopElem; };
