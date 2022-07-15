interface CollaboratorChangeLog extends CustomElemsBase {
  id?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  working_days?: XmlElem<number>;
  working_hours?: XmlElem<number>;
  rate?: XmlElem<number>;
  rate_percent?: XmlElem<number>;
}

interface CollaboratorHistoryState {
  id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface CollaboratorCustomParam {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface CollaboratorPersonalConfig {
  avatar_filename?: XmlElem<string>;
  nick?: XmlElem<string>;
  status?: XmlElem<string>;
  default_info_type?: XmlElem<string>;
}

interface CollaboratorCompBenPaymentType {
  payment_type_id?: XmlElem<number>;
  max_value?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface CollaboratorCompBen {
  salary?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  payment_period?: XmlElem<string>;
  comment?: XmlElem<string>;
  payment_types?: XmlMultiElem<CollaboratorCompBenPaymentType>;
}

interface CollaboratorLastData {
  web_banned?: XmlElem<boolean>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  access_role?: XmlElem<string>;
  is_arm_admin?: XmlElem<boolean>;
  is_application_admin?: XmlElem<boolean>;
  is_content_admin?: XmlElem<boolean>;
  in_request_black_list?: XmlElem<boolean>;
  position_id?: XmlElem<number>;
  pict_url?: XmlElem<string>;
  avatar_filename?: XmlElem<string>;
}

interface CollaboratorViewCard {
  is_preview?: XmlElem<boolean>;
}

interface CollaboratorView extends DescBase {
  is_admin?: XmlElem<boolean>;
  user_id?: XmlElem<number>;
  position_array?: XmlElem<any>;
  position_doc_ref?: XmlElem<any>;
  never_saved?: XmlElem<boolean>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
  disp_access?: XmlElem<boolean>;
  disp_auth?: XmlElem<boolean>;
  drop_pers_hier_entry?: XmlElem<boolean>;
  card?: XmlElem<CollaboratorViewCard>;
  get_position_array?(): any;
}

interface CollaboratorTopElem extends XmlTopElem<CollaboratorDocument>, PersonBase, PassportDataBase, FileListBase, FuncManagersBase, PathSubsBase, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, PersonObjectLinksBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  eid?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  change_password?: XmlElem<boolean>;
  is_candidate?: XmlElem<boolean>;
  is_outstaff?: XmlElem<boolean>;
  candidate_status_type_id?: XmlElem<number>;
  candidate_id?: XmlElem<number>;
  is_dismiss?: XmlElem<boolean>;
  hire_date?: XmlElem<Date>;
  dismiss_date?: XmlElem<Date>;
  position_date?: XmlElem<Date>;
  in_request_black_list?: XmlElem<boolean>;
  request_black_list_data?: XmlElem<Date>;
  request_black_list_comment?: XmlElem<string>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  pict_url?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  desc?: XmlElem<string>;
  disp_empty_fields?: XmlElem<boolean>;
  disp_personal_info?: XmlElem<boolean>;
  disp_login?: XmlElem<boolean>;
  disp_sex?: XmlElem<boolean>;
  disp_desc?: XmlElem<boolean>;
  disp_files?: XmlElem<boolean>;
  disp_birthdate?: XmlElem<boolean>;
  disp_birthdate_year?: XmlElem<boolean>;
  disp_resume?: XmlElem<boolean>;
  allow_personal_chat_request?: XmlElem<boolean>;
  personal_chat_confirmation_required?: XmlElem<boolean>;
  development_potential_id?: XmlElem<number>;
  efficiency_estimation_id?: XmlElem<number>;
  web_enter_date?: XmlElem<Date>;
  current_state?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  last_import_date?: XmlElem<Date>;
  level_id?: XmlElem<number>;
  grade_id?: XmlElem<number>;
  gdpr?: XmlElem<boolean>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  list_variant?: XmlElem<any>;
  access?: XmlElem<AccessBase>;
  category_id?: XmlMultiElem<string>;
  change_logs?: XmlMultiElem<CollaboratorChangeLog>;
  history_states?: XmlMultiElem<CollaboratorHistoryState>;
  custom_params?: XmlMultiElem<CollaboratorCustomParam>;
  personal_config?: XmlElem<CollaboratorPersonalConfig>;
  comp_ben?: XmlElem<CollaboratorCompBen>;
  last_data?: XmlElem<CollaboratorLastData>;
  view?: XmlElem<CollaboratorView>;
  name?(): any;
  is_time_access?(): any;
  clear_cur_position?(): any;
  start_action?(): any;
  set_basic_position?(): any;
  get_courses?(): any;
  get_tests?(): any;
  assign_course?(): any;
  assign_test?(): any;
  get_info?(): any;
  get_events?(): any;
  get_groups?(): any;
  get_event_results?(): any;
  update_info?(): any;
  clear_subs_fields?(): any;
}

type CollaboratorDocument = XmlDocument<CollaboratorTopElem>;
