type PlaceCatalogDocumentTopElem = XmlTopElem & { Doc: PlaceCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  region_id: XmlElem<number>;
  timezone_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PlaceCatalogDocument = XmlDocument & { TopElem: PlaceCatalogDocumentTopElem; };
