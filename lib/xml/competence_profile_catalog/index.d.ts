type CompetenceProfileCatalogDocumentTopElem = XmlTopElem & { Doc: CompetenceProfileCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CompetenceProfileCatalogDocument = XmlDocument & { TopElem: CompetenceProfileCatalogDocumentTopElem; };
