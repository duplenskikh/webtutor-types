type ActiveTestLearningDocumentTopElem = XmlTopElem &
LearningAssessmentBase &
PersonFillingBase &
LearningCurrentStateBase &
LearningObjectivesInteractionsBase &
LastAttemptTestLearningsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ActiveTestLearningDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  activation_code: XmlElem<string>;
  name(): string;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  proctor_prefer_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  attempts_num: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
  lesson_location: XmlElem<string>;
  score: XmlElem<number>;
  score_str: XmlElem<string>;
  core_lesson: XmlElem<string>;
  lesson_report: XmlElem<string>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  time: XmlElem<number>;
  max_score: XmlElem<number>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  question_num: XmlElem<number>;
  question_answered_num(): number;
  question_passed_num(): number;
  no_encoding_core_lesson: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  testing_link: XmlElem<string>;
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
