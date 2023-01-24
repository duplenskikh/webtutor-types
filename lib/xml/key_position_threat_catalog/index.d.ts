type KeyPositionThreatCatalogDocumentTopElem = XmlTopElem & { Doc: KeyPositionThreatCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  color: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KeyPositionThreatCatalogDocument = XmlDocument & { TopElem: KeyPositionThreatCatalogDocumentTopElem; };
