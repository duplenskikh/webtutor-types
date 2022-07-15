interface AcquaintCollaborator {
  collaborator_id?: XmlElem<number>;
  collaborator_fullname?: XmlElem<string>;
  date?: XmlElem<Date>;
  acquaint?: XmlElem<boolean>;
  bcreateaa?: XmlElem<boolean>;
  bonlydelaa?: XmlElem<boolean>;
}

interface AcquaintAssessment {
  assessment_id?: XmlElem<number>;
}

interface AcquaintGroup {
  group_id?: XmlElem<number>;
}

interface AcquaintQuestionCondition {
  grading_option_id?: XmlElem<string>;
  sentence_option_id?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface AcquaintQuestionEntry {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
  is_correct?: XmlElem<boolean>;
}

interface AcquaintQuestion {
  id?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
  item_id?: XmlElem<number>;
  type_id?: XmlElem<string>;
  title?: XmlElem<string>;
  correct_answer?: XmlElem<string>;
  conditions?: XmlMultiElem<AcquaintQuestionCondition>;
  entries?: XmlMultiElem<AcquaintQuestionEntry>;
}

interface AcquaintSelectType{
  select_type_id?: XmlElem<string>;
}

interface AcquaintTopElem extends XmlTopElem<AcquaintDocument>,
  IWTViewConditionsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  normative_date?: XmlElem<Date>;
  reacquaintance_period?: XmlElem<number>;
  collaborators?: XmlMultiElem<AcquaintCollaborator>;
  assessments?: XmlMultiElem<AcquaintAssessment>;
  groups?: XmlMultiElem<AcquaintGroup>;
  eval_code?: XmlElem<string>;
  status?: XmlElem<boolean>;
  questions?: XmlMultiElem<AcquaintQuestion>;
  select_types?: XmlMultiElem<AcquaintSelectType>;
  access?: XmlElem<IWTAccessDocBase>;
  role_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type AcquaintDocument = XmlDocument<AcquaintTopElem>;
