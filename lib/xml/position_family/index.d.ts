interface PositionFamilyCompetenceProfile {
  id?: XmlElem<number>;
}

interface PositionFamilyKpiProfile {
  id?: XmlElem<number>;
  period_type_id?: XmlElem<string>;
}

interface PositionFamilyView extends DescBase {
  knowledge_sort_type_id?: XmlElem<string>;
  knowledge_classifier_id?: XmlElem<number>;
}

interface PositionFamilyTopElem extends XmlTopElem<PositionFamilyDocument>, ObjectCodeNameBase, ViewConditionsBase, RequirementsBase, FileListBase, KnowledgePartsBase, KnowledgePartsBaseOld, AdminAccessBase, CustomElemsBase {
  parent_position_family_id?: XmlElem<number>;
  subdivision_group_id?: XmlElem<number>;
  is_dynamic?: XmlElem<boolean>;
  bonus_profile_id?: XmlElem<number>;
  competence_profile_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  competence_profiles?: XmlMultiElem<PositionFamilyCompetenceProfile>;
  kpi_profiles?: XmlMultiElem<PositionFamilyKpiProfile>;
  view?: XmlElem<PositionFamilyView>;
  dynamic_select_position_commons?(): any;
}

type PositionFamilyDocument = XmlDocument<PositionFamilyTopElem>;
