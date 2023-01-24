type ResourceTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ResourceTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type ResourceTypeCatalogDocument = XmlDocument & { TopElem: ResourceTypeCatalogDocumentTopElem; };
