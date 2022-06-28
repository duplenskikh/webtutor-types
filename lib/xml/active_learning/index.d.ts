
interface IWTActiveLearningTopElem extends IWTPersonFillingBase, IWTAdminAccessBase, IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
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
  parts?: XmlMultiElem<IWTActiveLearningPart>;
  last_usage_part_code?: XmlElem<string>;
  last_usage_date?: XmlElem<Date>;
  score_sum_eval?: XmlElem<string>;
  score?: XmlElem<number>;
  max_score?: XmlElem<number>;
  calc_score?: number;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  calc_max_end_date?: XmlElem<Date>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  logging?: XmlElem<boolean>;
  commenting?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  device_disp_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  complete_course?(): number;
  update_add_data?(): void;
}

type IWTActiveLearningDocument = IWTXmlDocument<IWTActiveLearningTopElem>;
