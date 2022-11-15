interface ActiveLearningDocumentPart extends LearningPartBase,
  LearningCurrentStateBase {
  is_mandatory: XmlElem<boolean>;
  score_factor: XmlElem<number>;
  dynamic_status: XmlElem<string>;
}

interface ActiveLearningDocumentEvent {
  event_id: XmlElem<number>;
  score: XmlElem<number>;
}

type ActiveLearningDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ActiveLearningDocument;
  code: XmlElem<string>;
  name(): string;
  course_id: XmlElem<number>;
  course_name: XmlElem<string>;
  course_code: XmlElem<string>;
  person_id: XmlElem<number>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  group_id: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  is_self_enrolled: XmlElem<boolean>;
  duration: XmlElem<number>;
  max_end_date: XmlElem<Date>;
  attempts_num: XmlElem<number>;
  base_url: XmlElem<string>;
  education_plan_id: XmlElem<number>;
  parts: XmlMultiElem<ActiveLearningDocumentPart>;
  events: XmlMultiElem<ActiveLearningDocumentEvent>;
  last_usage_part_code: XmlElem<string>;
  last_usage_date(): Date;
  max_score: XmlElem<number>;
  score_sum_eval: XmlElem<string>;
  score: XmlElem<number>;
  calc_score(): number;
  state_id: XmlElem<number>;
  time(): number;
  calc_max_end_date(): unknown;
  no_encoding_core_lesson: XmlElem<boolean>;
  logging: XmlElem<boolean>;
  commenting: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  device_disp_type: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  complete_course(): number | undefined;
  update_add_data(): undefined;
}

type ActiveLearningDocument = XmlDocument & {
  TopElem: ActiveLearningDocumentTopElem;
};
