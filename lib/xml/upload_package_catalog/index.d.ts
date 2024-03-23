type UploadPackageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.package_types>;
  file_url: XmlElem<string>;
  package_date: XmlElem<Date>;
  comment: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
