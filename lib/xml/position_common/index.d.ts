interface PositionCommonParentPositionCommon {
  position_common_id?: XmlElem<number>;
  career_transition_direction?: XmlElem<string>;
}

interface PositionCommonPositionFamily {
  position_family_id?: XmlElem<number>;
}

interface PositionCommonPositionName {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface PositionCommonBonusType {
  id?: XmlElem<string>;
  checked?: XmlElem<boolean>;
  name?: XmlElem<string>;
  min_value?: XmlElem<number>;
  max_value?: XmlElem<number>;
  value_type?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface PositionCommonGrade {
  grade_id?: XmlElem<number>;
  name?: XmlElem<string>;
  min_grade?: XmlElem<number>;
  max_grade?: XmlElem<number>;
}

interface PositionCommonBenefit {
  id?: XmlElem<number>;
}

interface PositionCommonCompetenceProfile {
  id?: XmlElem<number>;
}

interface PositionCommonKpiProfile {
  id?: XmlElem<number>;
  period_type_id?: XmlElem<string>;
  obligatory?: XmlElem<boolean>;
}

interface PositionCommonSubdivision {
  id?: XmlElem<number>;
}

interface PositionCommonOrg {
  id?: XmlElem<number>;
}

interface PositionCommonLevelCertificateType {
  certificate_type_id?: XmlElem<number>;
}

interface PositionCommonLevelCompoundProgram {
  compound_program_id?: XmlElem<number>;
}

interface PositionCommonLevelEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface PositionCommonLevelTypicalDevelopmentProgram {
  typical_development_program_id?: XmlElem<number>;
}

interface PositionCommonLevelQualification {
  qualification_id?: XmlElem<number>;
}

interface PositionCommonLevel {
  level_id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  competence_profile_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  certificate_types?: XmlMultiElem<PositionCommonLevelCertificateType>;
  compound_programs?: XmlMultiElem<PositionCommonLevelCompoundProgram>;
  education_methods?: XmlMultiElem<PositionCommonLevelEducationMethod>;
  typical_development_programs?: XmlMultiElem<PositionCommonLevelTypicalDevelopmentProgram>;
  qualifications?: XmlMultiElem<PositionCommonLevelQualification>;
}

interface PositionCommonView extends DescBase {
  benefit_id?: XmlElem<string>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
}

interface PositionCommonTopElem extends XmlTopElem<PositionCommonDocument>, ObjectCodeNameBase, RequirementsBase, FileListBase, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, AdminAccessBase {
  min_grade?: XmlElem<number>;
  max_grade?: XmlElem<number>;
  benefit_sum?: XmlElem<number>;
  status?: XmlElem<string>;
  min_salary?: XmlElem<number>;
  max_salary?: XmlElem<number>;
  currency?: XmlElem<string>;
  allow_outstaff?: XmlElem<boolean>;
  competence_profile_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  knowledge_profile_id?: XmlElem<number>;
  cur_level_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  parent_position_commons?: XmlMultiElem<PositionCommonParentPositionCommon>;
  position_familys?: XmlMultiElem<PositionCommonPositionFamily>;
  position_names?: XmlMultiElem<PositionCommonPositionName>;
  bonus_types?: XmlMultiElem<PositionCommonBonusType>;
  grades?: XmlMultiElem<PositionCommonGrade>;
  benefits?: XmlMultiElem<PositionCommonBenefit>;
  competence_profiles?: XmlMultiElem<PositionCommonCompetenceProfile>;
  kpi_profiles?: XmlMultiElem<PositionCommonKpiProfile>;
  subdivisions?: XmlMultiElem<PositionCommonSubdivision>;
  orgs?: XmlMultiElem<PositionCommonOrg>;
  levels?: XmlMultiElem<PositionCommonLevel>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<PositionCommonView>;
}

type PositionCommonDocument = XmlDocument<PositionCommonTopElem>;
