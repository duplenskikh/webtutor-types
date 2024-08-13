interface TestLearningDocumentSection {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
  score: XmlElem<number | null>;
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
  code: XmlElem<string | null>;
  name(): string;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
  assessment_code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_current_state: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  event_start_date: XmlElem<Date | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  state_id: XmlElem<number, typeof common.learning_states>;
  score: XmlElem<number>;
  text_result: XmlElem<string | null>;
  core_lesson: XmlElem<string | null>;
  lesson_report: XmlElem<string | null>;
  start_usage_date: XmlElem<Date | null>;
  start_learning_date: XmlElem<Date | null>;
  last_usage_date: XmlElem<Date | null>;
  max_end_date: XmlElem<Date | null>;
  time: XmlElem<number | null>;
  max_score: XmlElem<number | null>;
  qti_text: XmlElem<string | null>;
  qti_date: XmlElem<Date | null>;
  sections: XmlMultiElem<TestLearningDocumentSection | null>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  learning_record_id: XmlElem<number | null, LearningRecordCatalogDocumentTopElem>;
  active_test_learning_id: XmlElem<number | null>;
  active_test_learning_deleted: XmlElem<boolean | null>;
  is_self_enrolled: XmlElem<boolean | null>;
  use_proctoring: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  link_report: XmlElem<string | null>;
};

type TestLearningDocument = XmlDocument & {
  TopElem: TestLearningDocumentTopElem;
  test_learning: TestLearningDocumentTopElem;
  DocDesc(): string;
};
