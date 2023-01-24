type RemoteApplicationCatalogDocumentTopElem = XmlTopElem & { Doc: RemoteApplicationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  app_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RemoteApplicationCatalogDocument = XmlDocument & { TopElem: RemoteApplicationCatalogDocumentTopElem; };
