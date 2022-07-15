interface ActiveLearningPart extends LearningPartBase, LearningCurrentStateBase {
  is_mandatory?: XmlElem<boolean>;
  score_factor?: XmlElem<number>;
  dynamic_status?: XmlElem<string>;
}

interface ActiveLearningEvent {
  event_id?: XmlElem<number>;
  score?: XmlElem<number>;
}

interface ActiveLearningView {
  old_course_id?: XmlElem<number>;
  old_person_id?: XmlElem<number>;
  never_saved?: XmlElem<boolean>;
  part_index?: XmlElem<number>;
  course_object?: XmlElem<any>;
  result_tab_selector?: XmlElem<string>;
}

interface ActiveLearningTopElem extends XmlTopElem<ActiveLearningDocument>, PersonFillingBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  course_id?: XmlElem<number>;
  course_name?: XmlElem<string>;
  course_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  group_id?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  is_self_enrolled?: XmlElem<boolean>;
  duration?: XmlElem<number>;
  max_end_date?: XmlElem<Date>;
  attempts_num?: XmlElem<number>;
  base_url?: XmlElem<string>;
  education_plan_id?: XmlElem<number>;
  last_usage_part_code?: XmlElem<string>;
  last_usage_date?: XmlElem<Date>;
  max_score?: XmlElem<number>;
  score_sum_eval?: XmlElem<string>;
  score?: XmlElem<number>;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  logging?: XmlElem<boolean>;
  commenting?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  device_disp_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  parts?: XmlMultiElem<ActiveLearningPart>;
  events?: XmlMultiElem<ActiveLearningEvent>;
  view?: XmlElem<ActiveLearningView>;
  name?(): any;
  calc_score?(): any;
  calc_max_end_date?(): any;
  complete_course?(): any;
  update_add_data?(): any;
}

type ActiveLearningDocument = XmlDocument<ActiveLearningTopElem>;
