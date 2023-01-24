type NotificationSystemCatalogDocumentTopElem = XmlTopElem & { Doc: NotificationSystemCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type NotificationSystemCatalogDocument = XmlDocument & { TopElem: NotificationSystemCatalogDocumentTopElem; };
