type CareerReserveTypeCatalogDocumentTopElem = XmlTopElem & { Doc: CareerReserveTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CareerReserveTypeCatalogDocument = XmlDocument & { TopElem: CareerReserveTypeCatalogDocumentTopElem; };
