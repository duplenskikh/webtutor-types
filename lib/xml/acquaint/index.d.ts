interface AcquaintDocumentCollaborator {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
  date: XmlElem<Date>;
  acquaint: XmlElem<boolean>;
  bcreateaa: XmlElem<boolean>;
  bonlydelaa: XmlElem<boolean>;
}

interface AcquaintDocumentAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface AcquaintDocumentGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface AcquaintDocumentQuestionCondition {
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string>;
}

interface AcquaintDocumentQuestionEntry {
  id: XmlElem<string>;
  value: XmlElem<string>;
  is_correct: XmlElem<boolean>;
}

interface AcquaintDocumentQuestion {
  id: XmlElem<string>;
  is_custom: XmlElem<boolean>;
  item_id: XmlElem<number>;
  type_id: XmlElem<string, typeof common.acquaint_question_types>;
  title: XmlElem<string>;
  correct_answer: XmlElem<string>;
  conditions: XmlMultiElem<AcquaintDocumentQuestionCondition>;
  entries: XmlMultiElem<AcquaintDocumentQuestionEntry>;
}

interface AcquaintDocumentSelectType {
  select_type_id: XmlElem<string>;
}

type AcquaintDocumentTopElem = XmlTopElem &
ViewConditionsBase & {
  Doc: AcquaintDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  normative_date: XmlElem<Date>;
  reacquaintance_period: XmlElem<number>;
  collaborators: XmlMultiElem<AcquaintDocumentCollaborator>;
  assessments: XmlMultiElem<AcquaintDocumentAssessment>;
  groups: XmlMultiElem<AcquaintDocumentGroup>;
  eval_code: XmlElem<string>;
  status: XmlElem<boolean>;
  questions: XmlMultiElem<AcquaintDocumentQuestion>;
  select_types: XmlMultiElem<AcquaintDocumentSelectType>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type AcquaintDocument = XmlDocument & {
  TopElem: AcquaintDocumentTopElem;
  acquaint: AcquaintDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
