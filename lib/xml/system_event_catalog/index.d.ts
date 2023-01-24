type SystemEventCatalogDocumentTopElem = XmlTopElem & { Doc: SystemEventCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  is_active: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SystemEventCatalogDocument = XmlDocument & { TopElem: SystemEventCatalogDocumentTopElem; };
