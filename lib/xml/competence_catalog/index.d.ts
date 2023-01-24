type CompetenceCatalogDocumentTopElem = XmlTopElem & { Doc: CompetenceCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  parent_id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_block_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  exercises: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type CompetenceCatalogDocument = XmlDocument & { TopElem: CompetenceCatalogDocumentTopElem; };
