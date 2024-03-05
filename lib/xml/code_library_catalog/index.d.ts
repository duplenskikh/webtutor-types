type CodeLibraryCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  code_type: XmlElem<string>;
  code_url: XmlElem<string>;
  associated_applications_id: XmlMultiElemObject<number, ApplicationCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
