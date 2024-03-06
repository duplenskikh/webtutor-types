interface TestLearningDocumentSection {
  id: XmlElem<string>;
  title: XmlElem<string>;
  score: XmlElem<number>;
}

type TestLearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
AnnalsObjectsBase &
AnnalsNumsBase &
LearningObjectivesInteractionsBase &
AssessmentScaleValue &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TestLearningDocument;
  code: XmlElem<string>;
  name(): unknown;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
  assessment_code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  state_id: XmlElem<number, typeof common.learning_states>;
  score: XmlElem<number>;
  text_result: XmlElem<string>;
  core_lesson: XmlElem<string>;
  lesson_report: XmlElem<string>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  time: XmlElem<number>;
  max_score: XmlElem<number>;
  qti_text: XmlElem<string>;
  qti_date: XmlElem<Date>;
  sections: XmlMultiElem<TestLearningDocumentSection>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  learning_record_id: XmlElem<number, LearningRecordCatalogDocumentTopElem>;
  active_test_learning_id: XmlElem<number>;
  active_test_learning_deleted: XmlElem<boolean>;
  is_self_enrolled: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TestLearningDocument = XmlDocument & {
  TopElem: TestLearningDocumentTopElem;
  test_learning: TestLearningDocumentTopElem;
  DocDesc(): unknown;
};
