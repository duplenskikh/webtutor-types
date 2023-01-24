type DnStreamCatalogDocumentTopElem = XmlTopElem & { Doc: DnStreamCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnStreamCatalogDocument = XmlDocument & { TopElem: DnStreamCatalogDocumentTopElem; };
