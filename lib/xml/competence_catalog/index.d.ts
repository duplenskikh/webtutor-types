type CompetenceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  parent_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_block_id: XmlElem<number, CompetenceBlockCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  exercises: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};
