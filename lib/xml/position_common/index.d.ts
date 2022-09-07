interface PositionCommonDocumentParentPositionCommon {
  position_common_id: XmlElem<number>;
  career_transition_direction: XmlElem<string>;
}

interface PositionCommonDocumentPositionFamily {
  position_family_id: XmlElem<number>;
}

interface PositionCommonDocumentPositionName {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface PositionCommonDocumentBonusType {
  id: XmlElem<string>;
  checked: XmlElem<boolean>;
  name: XmlElem<string>;
  min_value: XmlElem<number>;
  max_value: XmlElem<number>;
  value_type: XmlElem<string>;
  comment: XmlElem<string>;
}

interface PositionCommonDocumentGrade {
  grade_id: XmlElem<number>;
  name: XmlElem<string>;
  min_grade: XmlElem<number>;
  max_grade: XmlElem<number>;
}

interface PositionCommonDocumentBenefit {
  id: XmlElem<number>;
}

interface PositionCommonDocumentCompetenceProfile {
  id: XmlElem<number>;
}

interface PositionCommonDocumentKpiProfile {
  id: XmlElem<number>;
  period_type_id: XmlElem<string>;
  obligatory: XmlElem<boolean>;
}

interface PositionCommonDocumentSubdivision {
  id: XmlElem<number>;
}

interface PositionCommonDocumentOrg {
  id: XmlElem<number>;
}

interface PositionCommonDocumentLevelCertificateType {
  certificate_type_id: XmlElem<number>;
}

interface PositionCommonDocumentLevelCompoundProgram {
  compound_program_id: XmlElem<number>;
}

interface PositionCommonDocumentLevelEducationMethod {
  education_method_id: XmlElem<number>;
}

interface PositionCommonDocumentLevelTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number>;
}

interface PositionCommonDocumentLevelQualification {
  qualification_id: XmlElem<number>;
}
interface PositionCommonDocumentLevel {
  level_id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_profile_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  certificate_types: XmlMultiElem<PositionCommonDocumentLevelCertificateType>;
  compound_programs: XmlMultiElem<PositionCommonDocumentLevelCompoundProgram>;
  education_methods: XmlMultiElem<PositionCommonDocumentLevelEducationMethod>;
  typical_development_programs: XmlMultiElem<PositionCommonDocumentLevelTypicalDevelopmentProgram>;
  qualifications: XmlMultiElem<PositionCommonDocumentLevelQualification>;
}

type PositionCommonDocumentTopElem = XmlTopElem & { Doc: PositionCommonDocument } & 
ObjectCodeNameBase &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  min_grade: XmlElem<number>;
  max_grade: XmlElem<number>;
  benefit_sum: XmlElem<number>;
  status: XmlElem<string>;
  parent_position_commons: XmlMultiElem<PositionCommonDocumentParentPositionCommon>;
  position_familys: XmlMultiElem<PositionCommonDocumentPositionFamily>;
  position_names: XmlMultiElem<PositionCommonDocumentPositionName>;
  min_salary: XmlElem<number>;
  max_salary: XmlElem<number>;
  currency: XmlElem<string>;
  allow_outstaff: XmlElem<boolean>;
  bonus_types: XmlMultiElem<PositionCommonDocumentBonusType>;
  grades: XmlMultiElem<PositionCommonDocumentGrade>;
  benefits: XmlMultiElem<PositionCommonDocumentBenefit>;
  competence_profile_id: XmlElem<number>;
  competence_profiles: XmlMultiElem<PositionCommonDocumentCompetenceProfile>;
  kpi_profile_id: XmlElem<number>;
  kpi_profiles: XmlMultiElem<PositionCommonDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number>;
  knowledge_profile_id: XmlElem<number>;
  subdivisions: XmlMultiElem<PositionCommonDocumentSubdivision>;
  orgs: XmlMultiElem<PositionCommonDocumentOrg>;
  cur_level_id: XmlElem<number>;
  levels: XmlMultiElem<PositionCommonDocumentLevel>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElem<number>;
}

type PositionCommonDocument = XmlDocument & { TopElem: PositionCommonDocumentTopElem; };
