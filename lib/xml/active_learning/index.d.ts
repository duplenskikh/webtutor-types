interface IWTActiveLearningPart extends IWTLearningPartBase,
  IWTLearningCurrentStateBase {
  is_mandatory?: XmlElem<boolean>
  score_factor?: XmlElem<number>
  dynamic_status?: XmlElem<string>
}

interface IWTActiveLearningEvent {
  event_id?: XmlElem<number>;
  score?: XmlElem<number>;
}

interface IWTView {
  old_course_id?: XmlElem<number>;
  old_person_id?: XmlElem<number>;
  never_saved?: XmlElem<boolean>;
  part_index?: XmlElem<number>;
  course_object?: XmlElem<any>;
  result_tab_selector?: XmlElem<string>;
}

interface IWTActiveLearningTopElem extends IWTXmlDocumentTopElem<IWTServerAgentDocument>,
  IWTPersonFillingBase,
  IWTAdminAccessBase,
  IWTDocInfo,
  IWTCustomElemsBase {
  code?: XmlElem<string>;
  name?(): string;
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
  events?: XmlMultiElem<IWTActiveLearningEvent>;
  last_usage_part_code?: XmlElem<string>;
  last_usage_date?(): Date;
  max_score?: XmlElem<number>;
  score_sum_eval?: XmlElem<string>;
  score?: XmlElem<number>;
  calc_score?(): number;
  state_id?(): number;
  time?(): number;
  calc_max_end_date?(): number | null;
  no_encoding_core_lesson?: XmlElem<boolean>;
  logging?: XmlElem<boolean>;
  commenting?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  device_disp_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  view?: IWTView;
  complete_course?(): number | void;
  update_add_data?(): void;
}

type IWTActiveLearningDocument = IWTXmlDocument<IWTActiveLearningTopElem>;
