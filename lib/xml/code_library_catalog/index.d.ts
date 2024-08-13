type CodeLibraryCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  code_type: XmlElem<string | null>;
  code_url: XmlElem<string | null>;
  associated_applications_id: XmlMultiElemObject<number | null, ApplicationCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
