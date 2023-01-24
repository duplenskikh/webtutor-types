type LearningDocumentPart = LearningPartBase

interface LearningDocumentEvent {
  event_id: XmlElem<number>;
  score: XmlElem<number>;
}

type LearningDocumentTopElem = XmlTopElem & { Doc: LearningDocument } & 
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  code: XmlElem<string>;
  name(): unknown;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  course_name: XmlElem<string>;
  course_code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  parts: XmlMultiElem<LearningDocumentPart>;
  no_encoding_core_lesson: XmlElem<boolean>;
  time: XmlElem<number>;
  events: XmlMultiElem<LearningDocumentEvent>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  is_self_enrolled: XmlElem<boolean>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  base_url: XmlElem<string>;
  max_score: XmlElem<number>;
  score: XmlElem<number>;
  text_result: XmlElem<string>;
  state_id: XmlElem<number, typeof common.learning_states>;
  active_learning_id: XmlElem<number, ActiveLearningCatalogDocumentTopElem>;
  active_learning_deleted: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type LearningDocument = XmlDocument & {
  TopElem: LearningDocumentTopElem;
};
