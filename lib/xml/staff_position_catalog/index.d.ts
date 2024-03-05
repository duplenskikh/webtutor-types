type StaffPositionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.budget_state_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  org_name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  profession_id: XmlElem<number, ProfessionCatalogDocumentTopElem>;
  profession_category_id: XmlElem<number, ProfessionCategoryCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number, KpiProfileCatalogDocumentTopElem>;
  knowledge_profile_id: XmlElem<number, KnowledgeProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
