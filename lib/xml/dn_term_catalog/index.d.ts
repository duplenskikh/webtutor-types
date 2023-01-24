type DnTermCatalogDocumentTopElem = XmlTopElem & { Doc: DnTermCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  str_term: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnTermCatalogDocument = XmlDocument & { TopElem: DnTermCatalogDocumentTopElem; };
