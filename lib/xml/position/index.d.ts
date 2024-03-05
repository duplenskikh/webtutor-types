interface PositionDocumentCompetenceProfile {
  id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
}

type PositionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  Doc: PositionDocument;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  basic_collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & XmlElem<MsPersonSdInnerBase>;
  basic_rate: XmlElem<number>;
  is_boss: XmlElem<boolean>;
  position_date: XmlElem<Date>;
  cost_month: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  competence_profile_id: XmlElem<number>;
  competence_profiles: XmlMultiElem<PositionDocumentCompetenceProfile>;
  competence_codes: XmlElem<string>;
  kpi_profile_id: XmlElem<number>;
  kpi_profiles: XmlMultiElem<PositionDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  knowledge_profile_id: XmlElem<number, KnowledgeProfileCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_common_level_id: XmlElem<number>;
  position_common_level_name: XmlElem<string>;
  position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  position_finish_date: XmlElem<Date>;
  is_position_finished: XmlElem<boolean>;
  position_assignment_type: XmlElem<string, typeof common.position_assignment_types>;
  position_appointment_type_id: XmlElem<number, AppointmentTypeCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number, StaffPositionCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PositionDocument = XmlDocument & {
  TopElem: PositionDocumentTopElem;
};
