type ProfessionCatalogDocumentTopElem = XmlTopElem & { Doc: ProfessionCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  professional_area_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProfessionCatalogDocument = XmlDocument & { TopElem: ProfessionCatalogDocumentTopElem; };
