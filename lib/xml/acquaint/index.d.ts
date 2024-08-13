interface AcquaintDocumentCollaborator {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  acquaint: XmlElem<boolean>;
  bcreateaa: XmlElem<boolean>;
  bonlydelaa: XmlElem<boolean>;
}

interface AcquaintDocumentAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface AcquaintDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface AcquaintDocumentQuestionCondition {
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string | null>;
}

interface AcquaintDocumentQuestionEntry {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
  is_correct: XmlElem<boolean | null>;
}

interface AcquaintDocumentQuestion {
  id: XmlElem<string | null>;
  is_custom: XmlElem<boolean | null>;
  item_id: XmlElem<number | null>;
  type_id: XmlElem<string | null, typeof common.acquaint_question_types>;
  title: XmlElem<string | null>;
  correct_answer: XmlElem<string | null>;
  conditions: XmlMultiElem<AcquaintDocumentQuestionCondition | null>;
  entries: XmlMultiElem<AcquaintDocumentQuestionEntry | null>;
}

interface AcquaintDocumentSelectType {
  select_type_id: XmlElem<string | null>;
}

type AcquaintDocumentTopElem = XmlTopElem &
ViewConditionsBase & {
  Doc: AcquaintDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  normative_date: XmlElem<Date | null>;
  reacquaintance_period: XmlElem<number>;
  collaborators: XmlMultiElem<AcquaintDocumentCollaborator | null>;
  assessments: XmlMultiElem<AcquaintDocumentAssessment | null>;
  groups: XmlMultiElem<AcquaintDocumentGroup | null>;
  eval_code: XmlElem<string | null>;
  status: XmlElem<boolean>;
  questions: XmlMultiElem<AcquaintDocumentQuestion | null>;
  select_types: XmlMultiElem<AcquaintDocumentSelectType | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AcquaintDocument = XmlDocument & {
  TopElem: AcquaintDocumentTopElem;
  acquaint: AcquaintDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
