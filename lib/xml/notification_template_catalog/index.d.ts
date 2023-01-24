type NotificationTemplateCatalogDocumentTopElem = XmlTopElem & { Doc: NotificationTemplateCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type NotificationTemplateCatalogDocument = XmlDocument & { TopElem: NotificationTemplateCatalogDocumentTopElem; };
