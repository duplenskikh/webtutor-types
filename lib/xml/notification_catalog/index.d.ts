type NotificationCatalogDocumentTopElem = XmlTopElem & { Doc: NotificationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  active: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type NotificationCatalogDocument = XmlDocument & { TopElem: NotificationCatalogDocumentTopElem; };
