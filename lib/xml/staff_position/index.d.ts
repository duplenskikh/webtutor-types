interface StaffPositionDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
}

interface StaffPositionDocumentCompetenceProfile {
  id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
}

type StaffPositionDocumentTopElem = XmlTopElem &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.project_status_types>;
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
  staff_num: XmlElem<number>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<StaffPositionDocumentKpiProfile>;
  knowledge_profile_id: XmlElem<number, KnowledgeProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<StaffPositionDocumentCompetenceProfile>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StaffPositionDocument = XmlDocument & {
  TopElem: StaffPositionDocumentTopElem;
  staff_position: StaffPositionDocumentTopElem;
  DocDesc(): unknown;
};
