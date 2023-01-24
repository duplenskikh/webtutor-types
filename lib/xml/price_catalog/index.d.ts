type PriceCatalogDocumentTopElem = XmlTopElem & { Doc: PriceCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  state_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
}

type PriceCatalogDocument = XmlDocument & { TopElem: PriceCatalogDocumentTopElem; };
