interface PositionDocumentCompetenceProfile {
  id: XmlElem<number>;
}

interface PositionDocumentKpiProfile {
  id: XmlElem<number>;
  period_type_id: XmlElem<string>;
}

type PositionDocumentTopElem = XmlTopElem & { Doc: PositionDocument } & 
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  basic_collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  basic_rate: XmlElem<number>;
  is_boss: XmlElem<boolean>;
  position_date: XmlElem<Date>;
  cost_month: XmlElem<number>;
  currency: XmlElem<string>;
  competence_profile_id: XmlElem<number>;
  competence_profiles: XmlMultiElem<PositionDocumentCompetenceProfile>;
  competence_codes: XmlElem<string>;
  kpi_profile_id: XmlElem<number>;
  kpi_profiles: XmlMultiElem<PositionDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number>;
  knowledge_profile_id: XmlElem<number>;
  position_common_id: XmlElem<number>;
  position_common_level_id: XmlElem<number>;
  position_common_level_name: XmlElem<string>;
  position_family_id: XmlElem<number>;
  position_finish_date: XmlElem<Date>;
  is_position_finished: XmlElem<boolean>;
  position_assignment_type: XmlElem<string>;
  position_appointment_type_id: XmlElem<number>;
  staff_position_id: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type PositionDocument = XmlDocument & {
  TopElem: PositionDocumentTopElem;
};
