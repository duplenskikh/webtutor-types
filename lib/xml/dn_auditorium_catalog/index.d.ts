type DnAuditoriumCatalogDocumentTopElem = XmlTopElem & { Doc: DnAuditoriumCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  number_places: XmlElem<string>;
  place_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnAuditoriumCatalogDocument = XmlDocument & { TopElem: DnAuditoriumCatalogDocumentTopElem; };
