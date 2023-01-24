type AdminConfigurationCatalogDocumentTopElem = XmlTopElem & { Doc: AdminConfigurationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AdminConfigurationCatalogDocument = XmlDocument & { TopElem: AdminConfigurationCatalogDocumentTopElem; };
