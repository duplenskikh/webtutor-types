type ContactResultCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  OnBuild(): unknown;
};
