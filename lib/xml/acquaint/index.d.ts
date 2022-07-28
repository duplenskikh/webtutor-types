interface AcquaintDocumentCollaborator {
  collaborator_id?: XmlElem<number>;
  collaborator_fullname?: XmlElem<string>;
  date?: XmlElem<Date>;
  acquaint?: XmlElem<boolean>;
  bcreateaa?: XmlElem<boolean>;
  bonlydelaa?: XmlElem<boolean>;
}

interface AcquaintDocumentAssessment {
  assessment_id?: XmlElem<number>;
}

interface AcquaintDocumentGroup {
  group_id?: XmlElem<number>;
}

interface AcquaintDocumentQuestionCondition {
  grading_option_id?: XmlElem<string>;
  sentence_option_id?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface AcquaintDocumentQuestionEntry {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
  is_correct?: XmlElem<boolean>;
}
interface AcquaintDocumentQuestion {
  id?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
  item_id?: XmlElem<number>;
  type_id?: XmlElem<string>;
  title?: XmlElem<string>;
  correct_answer?: XmlElem<string>;
  conditions?: XmlMultiElem<AcquaintDocumentQuestionCondition>;
  entries?: XmlMultiElem<AcquaintDocumentQuestionEntry>;
}

interface AcquaintDocumentSelectType {
  select_type_id?: XmlElem<string>;
}

type AcquaintDocumentTopElem = XmlTopElem & { Doc: AcquaintDocument } & 
  ViewConditionsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  normative_date?: XmlElem<Date>;
  reacquaintance_period?: XmlElem<number>;
  collaborators?: XmlMultiElem<AcquaintDocumentCollaborator>;
  assessments?: XmlMultiElem<AcquaintDocumentAssessment>;
  groups?: XmlMultiElem<AcquaintDocumentGroup>;
  eval_code?: XmlElem<string>;
  status?: XmlElem<boolean>;
  questions?: XmlMultiElem<AcquaintDocumentQuestion>;
  select_types?: XmlMultiElem<AcquaintDocumentSelectType>;
  access?: XmlElem<AccessDocBase>;
  role_id?: XmlMultiElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type AcquaintDocument = XmlDocument & { TopElem: AcquaintDocumentTopElem; };
