type CustomWebTemplateGroupCatalogDocumentTopElem = XmlTopElem & { Doc: CustomWebTemplateGroupCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CustomWebTemplateGroupCatalogDocument = XmlDocument & { TopElem: CustomWebTemplateGroupCatalogDocumentTopElem; };
