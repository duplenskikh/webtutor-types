type UploadPackageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.package_types>;
  file_url: XmlElem<string | null>;
  package_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
