interface LearningPart extends LearningPartBase {
}

interface LearningEvent {
  event_id?: XmlElem<number>;
  score?: XmlElem<number>;
}

interface LearningView {
  part_index?: XmlElem<number>;
  result_tab_selector?: XmlElem<string>;
}

interface LearningTopElem extends XmlTopElem<LearningDocument>, PersonFillingBase, CustomElemsBase, AdminAccessBase {
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
  education_plan_id?: XmlElem<number>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  time?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  is_self_enrolled?: XmlElem<boolean>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  base_url?: XmlElem<string>;
  max_score?: XmlElem<number>;
  score?: XmlElem<number>;
  text_result?: XmlElem<string>;
  state_id?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  active_learning_deleted?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  parts?: XmlMultiElem<LearningPart>;
  events?: XmlMultiElem<LearningEvent>;
  view?: XmlElem<LearningView>;
  name?(): any;
}

type LearningDocument = XmlDocument<LearningTopElem>;
