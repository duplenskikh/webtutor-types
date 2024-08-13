interface PositionCommonDocumentParentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  career_transition_direction: XmlElem<string | null, typeof common.career_transition_direction_types>;
}

interface PositionCommonDocumentPositionFamily {
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
}

interface PositionCommonDocumentPositionName {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface PositionCommonDocumentBonusType {
  id: XmlElem<string | null>;
  checked: XmlElem<boolean>;
  name: XmlElem<string | null>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
  value_type: XmlElem<string>;
  comment: XmlElem<string | null>;
}

interface PositionCommonDocumentGrade {
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  min_grade: XmlElem<number | null>;
  max_grade: XmlElem<number | null>;
}

interface PositionCommonDocumentBenefit {
  id: XmlElem<number | null, BenefitCatalogDocumentTopElem>;
}

interface PositionCommonDocumentCompetenceProfile {
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionCommonDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
}

interface PositionCommonDocumentSubdivision {
  id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

interface PositionCommonDocumentOrg {
  id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelCertificateType {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelCompoundProgram {
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelTypicalDevelopmentProgram {
  typical_development_program_id: XmlElem<number | null, TypicalDevelopmentProgramCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevelQualification {
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
}

interface PositionCommonDocumentLevel {
  level_id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  certificate_types: XmlMultiElem<PositionCommonDocumentLevelCertificateType | null>;
  compound_programs: XmlMultiElem<PositionCommonDocumentLevelCompoundProgram | null>;
  education_methods: XmlMultiElem<PositionCommonDocumentLevelEducationMethod | null>;
  typical_development_programs: XmlMultiElem<PositionCommonDocumentLevelTypicalDevelopmentProgram | null>;
  qualifications: XmlMultiElem<PositionCommonDocumentLevelQualification | null>;
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
  min_grade: XmlElem<number | null>;
  max_grade: XmlElem<number | null>;
  benefit_sum: XmlElem<number | null>;
  status: XmlElem<string | null, typeof common.position_common_statuss>;
  parent_position_commons: XmlMultiElem<PositionCommonDocumentParentPositionCommon | null>;
  position_familys: XmlMultiElem<PositionCommonDocumentPositionFamily | null>;
  position_names: XmlMultiElem<PositionCommonDocumentPositionName | null>;
  min_salary: XmlElem<number | null>;
  max_salary: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  allow_outstaff: XmlElem<boolean>;
  bonus_types: XmlMultiElem<PositionCommonDocumentBonusType | null>;
  grades: XmlMultiElem<PositionCommonDocumentGrade | null>;
  benefits: XmlMultiElem<PositionCommonDocumentBenefit | null>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<PositionCommonDocumentCompetenceProfile | null>;
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionCommonDocumentKpiProfile | null>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  subdivisions: XmlMultiElem<PositionCommonDocumentSubdivision | null>;
  orgs: XmlMultiElem<PositionCommonDocumentOrg | null>;
  cur_level_id: XmlElem<number | null>;
  levels: XmlMultiElem<PositionCommonDocumentLevel | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type PositionCommonDocument = XmlDocument & {
  TopElem: PositionCommonDocumentTopElem;
  position_common: PositionCommonDocumentTopElem;
  OnBeforeSave(): void;
  OnCreate(): void;
  OnInit(): void;
  DocDesc(): string;
};
