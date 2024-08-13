interface RoleWeightsBaseRoleWeight {
  role_code: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  weight: XmlElem<number>;
}

interface RoleWeightsBase {
  role_weights: XmlMultiElem<RoleWeightsBaseRoleWeight | null>;
}

interface CompetenceProfileDocumentRole {
  role_code: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
}

interface CompetenceProfileDocumentCompetenceEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface CompetenceProfileDocumentCompetenceDevelopmentMethod {
  development_method_id: XmlElem<number | null, DevelopmentMethodCatalogDocumentTopElem>;
}

interface CompetenceProfileDocumentCompetenceIndicatorEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface CompetenceProfileDocumentCompetenceIndicatorDevelopmentMethod {
  development_method_id: XmlElem<number | null, DevelopmentMethodCatalogDocumentTopElem>;
}

interface CompetenceProfileDocumentCompetenceIndicator extends RoleWeightsBase {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
  education_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceIndicatorEducationMethod | null>;
  development_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceIndicatorDevelopmentMethod | null>;
}

interface CompetenceProfileDocumentCompetence extends RoleWeightsBase {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
  type: XmlElem<string | null, typeof lists.competence_types>;
  education_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceEducationMethod | null>;
  development_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceDevelopmentMethod | null>;
  indicators: XmlMultiElem<CompetenceProfileDocumentCompetenceIndicator | null>;
}

interface CompetenceProfileDocumentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

interface CompetenceProfileDocumentAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_score: XmlElem<number | null>;
}

interface CompetenceProfileDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

type CompetenceProfileDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
SupplementaryQuestionsBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  Doc: CompetenceProfileDocument;
  roles: XmlMultiElem<CompetenceProfileDocumentRole | null>;
  competences: XmlMultiElem<CompetenceProfileDocumentCompetence | null>;
  education_methods: XmlMultiElem<CompetenceProfileDocumentEducationMethod | null>;
  assessments: XmlMultiElem<CompetenceProfileDocumentAssessment | null>;
  access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  position_commons: XmlMultiElem<CompetenceProfileDocumentPositionCommon | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  update_values(): void;
  role_id: XmlMultiElemObject<number | null>;
};

type CompetenceProfileDocument = XmlDocument & {
  TopElem: CompetenceProfileDocumentTopElem;
  competence_profile: CompetenceProfileDocumentTopElem;
  DocDesc(): string;
};
