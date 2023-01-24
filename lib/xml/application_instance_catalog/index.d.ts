type ApplicationInstanceCatalogDocumentTopElem = XmlTopElem & { Doc: ApplicationInstanceCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  application_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ApplicationInstanceCatalogDocument = XmlDocument & { TopElem: ApplicationInstanceCatalogDocumentTopElem; };
