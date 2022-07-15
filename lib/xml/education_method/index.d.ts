interface EducationMethodEventForm {
  form_id?: XmlElem<string>;
}

interface EducationMethodCompetenceIndicator {
  indicator_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  required_mark?: XmlElem<string>;
  weight?: XmlElem<number>;
}

interface EducationMethodCompetence {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  required_mark?: XmlElem<string>;
  weight?: XmlElem<number>;
  indicators?: XmlMultiElem<EducationMethodCompetenceIndicator>;
}

interface EducationMethodSimilarEducationMethod {
  id?: XmlElem<number>;
}

interface EducationMethodViewScale {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  percent?: XmlElem<number>;
}

interface EducationMethodView extends DescBase {
  part_index?: XmlElem<number>;
  is_future_events?: XmlElem<boolean>;
  selector?: XmlElem<string>;
  flag_mark?: XmlElem<boolean>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
  sort_type_id?: XmlElem<string>;
  scales?: XmlMultiElem<EducationMethodViewScale>;
}

interface EducationMethodTopElem extends XmlTopElem<EducationMethodDocument>, ProgramMethodBase, LectorsBase, CustomElemsBase, AdminAccessBase, KnowledgePartsBase, KnowledgePartsBaseOld, EduMethodTestingBase, FileListBase, ExpenseDistributionBase, GameBonusBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  is_open?: XmlElem<boolean>;
  default_request_type_id?: XmlElem<number>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  certificate_type_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  event_form?: XmlElem<string>;
  event_type_id?: XmlElem<number>;
  role_id?: XmlMultiElem<number>;
  event_forms?: XmlMultiElem<EducationMethodEventForm>;
  competences?: XmlMultiElem<EducationMethodCompetence>;
  similar_education_methods?: XmlMultiElem<EducationMethodSimilarEducationMethod>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<EducationMethodView>;
  get_workflow_id?(): any;
}

type EducationMethodDocument = XmlDocument<EducationMethodTopElem>;
