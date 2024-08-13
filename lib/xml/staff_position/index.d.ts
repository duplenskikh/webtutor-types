interface StaffPositionDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
}

interface StaffPositionDocumentCompetenceProfile {
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

type StaffPositionDocumentTopElem = XmlTopElem &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.project_status_types>;
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
  staff_num: XmlElem<number | null>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<StaffPositionDocumentKpiProfile | null>;
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<StaffPositionDocumentCompetenceProfile | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionDocument = XmlDocument & {
  TopElem: StaffPositionDocumentTopElem;
  staff_position: StaffPositionDocumentTopElem;
  DocDesc(): string;
};
