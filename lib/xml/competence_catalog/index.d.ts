type CompetenceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  parent_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  competence_block_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  exercises: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
