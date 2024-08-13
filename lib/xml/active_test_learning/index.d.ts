type ActiveTestLearningDocumentTopElem = XmlTopElem &
LearningAssessmentBase &
PersonFillingBase &
LearningCurrentStateBase &
LearningObjectivesInteractionsBase &
LastAttemptTestLearningsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ActiveTestLearningDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  activation_code: XmlElem<string | null>;
  name(): string;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_current_state: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  event_start_date: XmlElem<Date | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  proctor_prefer_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  attempts_num: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
  lesson_location: XmlElem<string | null>;
  score: XmlElem<number>;
  score_str: XmlElem<string | null>;
  core_lesson: XmlElem<string | null>;
  lesson_report: XmlElem<string | null>;
  start_usage_date: XmlElem<Date | null>;
  start_learning_date: XmlElem<Date | null>;
  last_usage_date: XmlElem<Date | null>;
  max_end_date: XmlElem<Date | null>;
  time: XmlElem<number | null>;
  max_score: XmlElem<number | null>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  question_num: XmlElem<number | null>;
  question_answered_num(): number;
  question_passed_num(): number;
  no_encoding_core_lesson: XmlElem<boolean | null>;
  use_proctoring: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  testing_link: XmlElem<string | null>;
  calc_max_end_date(): Date | null;
  complete_test(): number;
};

type ActiveTestLearningDocument = XmlDocument & {
  TopElem: ActiveTestLearningDocumentTopElem;
  active_test_learning: ActiveTestLearningDocumentTopElem;
  OnLocalInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
