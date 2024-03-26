type IndicatorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<number, typeof common.indicator_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};
