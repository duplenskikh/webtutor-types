interface ActiveLearningDocumentPart extends LearningPartBase, LearningCurrentStateBase {
  is_mandatory: XmlElem<boolean>;
  score_factor: XmlElem<number>;
  dynamic_status: XmlElem<string | null>;
}

interface ActiveLearningDocumentEvent {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  score: XmlElem<number>;
}

type ActiveLearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ActiveLearningDocument;
  id: XmlElem<number | null>;
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
  start_usage_date: XmlElem<Date | null>;
  start_learning_date: XmlElem<Date | null>;
  is_self_enrolled: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  max_end_date: XmlElem<Date | null>;
  attempts_num: XmlElem<number>;
  base_url: XmlElem<string | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  parts: XmlMultiElem<ActiveLearningDocumentPart | null>;
  events: XmlMultiElem<ActiveLearningDocumentEvent | null>;
  last_usage_part_code: XmlElem<string | null>;
  last_usage_date: XmlElem<Date | null>;
  max_score: XmlElem<number>;
  score_sum_eval: XmlElem<string>;
  score: XmlElem<number>;
  calc_score(): number;
  state_id: XmlElem<number, typeof common.learning_states>;
  time: XmlElem<number | null>;
  calc_max_end_date(): Date | null;
  no_encoding_core_lesson: XmlElem<boolean | null>;
  logging: XmlElem<boolean | null>;
  commenting: XmlElem<boolean | null>;
  use_proctoring: XmlElem<boolean>;
  device_disp_type: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  complete_course(): number | undefined;
  update_add_data(): void;
};

type ActiveLearningDocument = XmlDocument & {
  TopElem: ActiveLearningDocumentTopElem;
  active_learning: ActiveLearningDocumentTopElem;
  OnBeforeSave(): void;
  OnLocalInit(): void;
  DocDesc(): string;
};
