interface RoleWeightsBaseRoleWeight {
  role_code: XmlElem<string>;
  weight: XmlElem<number>;
}

interface RoleWeightsBase {
  role_weights: XmlMultiElem<RoleWeightsBaseRoleWeight>;
}

interface CompetenceProfileDocumentRole {
  role_code: XmlElem<string>;
}

interface CompetenceProfileDocumentCompetenceEducationMethod {
  education_method_id: XmlElem<number>;
}

interface CompetenceProfileDocumentCompetenceDevelopmentMethod {
  development_method_id: XmlElem<number>;
}

interface CompetenceProfileDocumentCompetenceIndicatorEducationMethod {
  education_method_id: XmlElem<number>;
}

interface CompetenceProfileDocumentCompetenceIndicatorDevelopmentMethod {
  development_method_id: XmlElem<number>;
}

interface CompetenceProfileDocumentCompetenceIndicator extends RoleWeightsBase {
  indicator_id: XmlElem<number>;
  plan: XmlElem<string>;
  plan_text: XmlElem<string>;
  plan_value: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
  education_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceIndicatorEducationMethod>;
  development_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceIndicatorDevelopmentMethod>;
}

interface CompetenceProfileDocumentCompetence extends RoleWeightsBase {
  competence_id: XmlElem<number>;
  plan: XmlElem<string>;
  plan_text: XmlElem<string>;
  plan_value: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
  type: XmlElem<string>;
  education_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceEducationMethod>;
  development_methods: XmlMultiElem<CompetenceProfileDocumentCompetenceDevelopmentMethod>;
  indicators: XmlMultiElem<CompetenceProfileDocumentCompetenceIndicator>;
}

interface CompetenceProfileDocumentEducationMethod {
  education_method_id: XmlElem<number>;
}

interface CompetenceProfileDocumentAssessment {
  assessment_id: XmlElem<number>;
  assessment_score: XmlElem<number>;
}

interface CompetenceProfileDocumentPositionCommon {
  position_common_id: XmlElem<number>;
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
  roles: XmlMultiElem<CompetenceProfileDocumentRole>;
  competences: XmlMultiElem<CompetenceProfileDocumentCompetence>;
  education_methods: XmlMultiElem<CompetenceProfileDocumentEducationMethod>;
  assessments: XmlMultiElem<CompetenceProfileDocumentAssessment>;
  access_role: XmlElem<string>;
  position_commons: XmlMultiElem<CompetenceProfileDocumentPositionCommon>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  update_values(): void;
  role_id: XmlMultiElem<number>;
};

type CompetenceProfileDocument = XmlDocument & {
  TopElem: CompetenceProfileDocumentTopElem;
};
