interface LearningDocumentEvent {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  score: XmlElem<number | null>;
}

type LearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LearningDocument;
  code: XmlElem<string | null>;
  name(): string;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  course_name: XmlElem<string | null>;
  course_code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_current_state: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  event_start_date: XmlElem<Date | null>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  parts: XmlMultiElem<LearningPartBase | null>;
  no_encoding_core_lesson: XmlElem<boolean | null>;
  time: XmlElem<number | null>;
  events: XmlMultiElem<LearningDocumentEvent | null>;
  start_usage_date: XmlElem<Date | null>;
  start_learning_date: XmlElem<Date | null>;
  is_self_enrolled: XmlElem<boolean>;
  last_usage_date: XmlElem<Date | null>;
  max_end_date: XmlElem<Date | null>;
  base_url: XmlElem<string | null>;
  max_score: XmlElem<number>;
  score: XmlElem<number | null>;
  text_result: XmlElem<string | null>;
  state_id: XmlElem<number | null, typeof common.learning_states>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  active_learning_deleted: XmlElem<boolean | null>;
  use_proctoring: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningDocument = XmlDocument & {
  TopElem: LearningDocumentTopElem;
  learning: LearningDocumentTopElem;
  DocDesc(): string;
};
