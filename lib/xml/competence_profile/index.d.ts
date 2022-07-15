interface CompetenceProfileRole {
  role_code?: XmlElem<string>;
}

interface CompetenceProfileCompetenceEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface CompetenceProfileCompetenceDevelopmentMethod {
  development_method_id?: XmlElem<number>;
}

interface CompetenceProfileCompetenceIndicatorEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface CompetenceProfileCompetenceIndicatorDevelopmentMethod {
  development_method_id?: XmlElem<number>;
}

interface CompetenceProfileCompetenceIndicator extends RoleWeightsBase {
  indicator_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  plan_text?: XmlElem<string>;
  plan_value?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
  education_methods?: XmlMultiElem<CompetenceProfileCompetenceIndicatorEducationMethod>;
  development_methods?: XmlMultiElem<CompetenceProfileCompetenceIndicatorDevelopmentMethod>;
}

interface CompetenceProfileCompetence extends RoleWeightsBase {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  plan_text?: XmlElem<string>;
  plan_value?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
  type?: XmlElem<string>;
  education_methods?: XmlMultiElem<CompetenceProfileCompetenceEducationMethod>;
  development_methods?: XmlMultiElem<CompetenceProfileCompetenceDevelopmentMethod>;
  indicators?: XmlMultiElem<CompetenceProfileCompetenceIndicator>;
}

interface CompetenceProfileEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface CompetenceProfileAssessment {
  assessment_id?: XmlElem<number>;
  assessment_score?: XmlElem<number>;
}

interface CompetenceProfilePositionCommon {
  position_common_id?: XmlElem<number>;
}

interface CompetenceProfileView {
  selector?: XmlElem<string>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
  random_val?: XmlElem<number>;
}

interface CompetenceProfileTopElem extends XmlTopElem<CompetenceProfileDocument>, ObjectCodeNameBase, SupplementaryQuestionsBase, FileListBase, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, AdminAccessBase {
  access_role?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  roles?: XmlMultiElem<CompetenceProfileRole>;
  competences?: XmlMultiElem<CompetenceProfileCompetence>;
  education_methods?: XmlMultiElem<CompetenceProfileEducationMethod>;
  assessments?: XmlMultiElem<CompetenceProfileAssessment>;
  position_commons?: XmlMultiElem<CompetenceProfilePositionCommon>;
  view?: XmlElem<CompetenceProfileView>;
  update_values?(): any;
}

type CompetenceProfileDocument = XmlDocument<CompetenceProfileTopElem>;
