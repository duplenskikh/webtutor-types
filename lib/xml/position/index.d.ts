interface PositionCompetenceProfile {
  id?: XmlElem<number>;
}

interface PositionKpiProfile {
  id?: XmlElem<number>;
  period_type_id?: XmlElem<string>;
}

interface PositionView extends DescBase {
  basic_collaborator_id?: XmlElem<number>;
  org_id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  drop_pers_hier_entry?: XmlElem<boolean>;
}

interface PositionTopElem extends XmlTopElem<PositionDocument>, ObjectCodeNameBase, FileListBase, CustomElemsBase {
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  basic_collaborator_id?: XmlElem<number>;
  basic_rate?: XmlElem<number>;
  is_boss?: XmlElem<boolean>;
  position_date?: XmlElem<Date>;
  cost_month?: XmlElem<number>;
  currency?: XmlElem<string>;
  competence_profile_id?: XmlElem<number>;
  competence_codes?: XmlElem<string>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  knowledge_profile_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  position_common_level_id?: XmlElem<number>;
  position_common_level_name?: XmlElem<string>;
  position_family_id?: XmlElem<number>;
  position_finish_date?: XmlElem<Date>;
  is_position_finished?: XmlElem<boolean>;
  position_assignment_type?: XmlElem<string>;
  position_appointment_type_id?: XmlElem<number>;
  staff_position_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  competence_profiles?: XmlMultiElem<PositionCompetenceProfile>;
  kpi_profiles?: XmlMultiElem<PositionKpiProfile>;
  view?: XmlElem<PositionView>;
}

type PositionDocument = XmlDocument<PositionTopElem>;
