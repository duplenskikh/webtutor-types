type StaffPositionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.budget_state_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  org_name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  profession_id: XmlElem<number | null, ProfessionCatalogDocumentTopElem>;
  profession_category_id: XmlElem<number | null, ProfessionCategoryCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  tags: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
