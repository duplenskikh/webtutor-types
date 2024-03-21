interface PositionCommonDocumentParentPositionCommon {
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
}

interface PositionCommonDocumentPositionFamily {
  position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
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
  grade_id: XmlElem<number, GradeCatalogDocumentTopElem>;
  name: XmlElem<string>;
  min_grade: XmlElem<number>;
  max_grade: XmlElem<number>;
}

interface PositionCommonDocumentBenefit {
  id: XmlElem<number, BenefitCatalogDocumentTopElem>;
}

interface PositionCommonDocumentCompetenceProfile {
  id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionCommonDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
}

interface PositionCommonDocumentSubdivision {
  id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

interface PositionCommonDocumentOrg {
  id: XmlElem<number, OrgCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelCertificateType {
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelCompoundProgram {
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number, TypicalDevelopmentProgramCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelQualification {
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevel {
  level_id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  certificate_types: XmlMultiElem<PositionCommonDocumentLevelCertificateType>;
  compound_programs: XmlMultiElem<PositionCommonDocumentLevelCompoundProgram>;
  education_methods: XmlMultiElem<PositionCommonDocumentLevelEducationMethod>;
  typical_development_programs: XmlMultiElem<PositionCommonDocumentLevelTypicalDevelopmentProgram>;
  qualifications: XmlMultiElem<PositionCommonDocumentLevelQualification>;
}

type PositionCommonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  Doc: PositionCommonDocument;
  min_grade: XmlElem<number>;
  max_grade: XmlElem<number>;
  benefit_sum: XmlElem<number>;
  status: XmlElem<string, typeof common.position_common_statuss>;
  parent_position_commons: XmlMultiElem<PositionCommonDocumentParentPositionCommon>;
  position_familys: XmlMultiElem<PositionCommonDocumentPositionFamily>;
  position_names: XmlMultiElem<PositionCommonDocumentPositionName>;
  min_salary: XmlElem<number>;
  max_salary: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  allow_outstaff: XmlElem<boolean>;
  bonus_types: XmlMultiElem<PositionCommonDocumentBonusType>;
  grades: XmlMultiElem<PositionCommonDocumentGrade>;
  benefits: XmlMultiElem<PositionCommonDocumentBenefit>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<PositionCommonDocumentCompetenceProfile>;
  kpi_profile_id: XmlElem<number>;
  kpi_profiles: XmlMultiElem<PositionCommonDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  knowledge_profile_id: XmlElem<number, KnowledgeProfileCatalogDocumentTopElem>;
  subdivisions: XmlMultiElem<PositionCommonDocumentSubdivision>;
  orgs: XmlMultiElem<PositionCommonDocumentOrg>;
  cur_level_id: XmlElem<number>;
  levels: XmlMultiElem<PositionCommonDocumentLevel>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
};

type PositionCommonDocument = XmlDocument & {
  TopElem: PositionCommonDocumentTopElem;
  position_common: PositionCommonDocumentTopElem;
  OnBeforeSave(): unknown;
  OnCreate(): unknown;
  OnInit(): unknown;
  DocDesc(): unknown;
};
