interface CollaboratorDocumentChangeLog extends CustomElemsBase {
  id: XmlElem<string>;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  position_parent_id: XmlElem<number>;
  position_parent_name: XmlElem<string>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  date: XmlElem<Date>;
  comment: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  working_days: XmlElem<number>;
  working_hours: XmlElem<number>;
  rate: XmlElem<number>;
  rate_percent: XmlElem<number>;
}

interface CollaboratorDocumentHistoryState {
  id: XmlElem<string>;
  state_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  comment: XmlElem<string>;
}

interface CollaboratorDocumentCustomParam {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

type CollaboratorDocumentTopElem = XmlTopElem & { Doc: CollaboratorDocument } & 
  PersonBase &
  PassportDataBase &
  FileListBase &
  FuncManagersBase &
  PathSubsBase &
  KnowledgePartsBase &
  KnowledgePartsBaseOld &
  CustomElemsBase &
  PersonObjectLinksBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  eid: XmlElem<string>;
  name(): unknown;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  position_parent_id: XmlElem<number>;
  position_parent_name: XmlElem<string>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  change_password: XmlElem<boolean>;
  is_candidate: XmlElem<boolean>;
  is_outstaff: XmlElem<boolean>;
  candidate_status_type_id: XmlElem<number>;
  candidate_id: XmlElem<number>;
  is_dismiss: XmlElem<boolean>;
  hire_date: XmlElem<Date>;
  dismiss_date: XmlElem<Date>;
  position_date: XmlElem<Date>;
  in_request_black_list: XmlElem<boolean>;
  request_black_list_data: XmlElem<Date>;
  request_black_list_comment: XmlElem<string>;
  place_id: XmlElem<number>;
  region_id: XmlElem<number>;
  access: XmlElem<AccessBase>;
  cost_center_id: XmlElem<number>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string>;
  pict_url: XmlElem<string>;
  access_time_start: XmlElem<string>;
  access_time_end: XmlElem<string>;
  is_time_access(): unknown;
  desc: XmlElem<string>;
  disp_empty_fields: XmlElem<boolean>;
  disp_personal_info: XmlElem<boolean>;
  disp_login: XmlElem<boolean>;
  disp_sex: XmlElem<boolean>;
  disp_desc: XmlElem<boolean>;
  disp_files: XmlElem<boolean>;
  disp_birthdate: XmlElem<boolean>;
  disp_birthdate_year: XmlElem<boolean>;
  disp_resume: XmlElem<boolean>;
  allow_personal_chat_request: XmlElem<boolean>;
  personal_chat_confirmation_required: XmlElem<boolean>;
  development_potential_id: XmlElem<number>;
  efficiency_estimation_id: XmlElem<number>;
  web_enter_date: XmlElem<Date>;
  category_id: XmlMultiElem<string>;
  change_logs: XmlMultiElem<CollaboratorDocumentChangeLog>;
  current_state: XmlElem<string>;
  history_states: XmlMultiElem<CollaboratorDocumentHistoryState>;
  doc_info: XmlElem<DocInfoBase>;
  last_import_date: XmlElem<Date>;
  custom_params: XmlMultiElem<CollaboratorDocumentCustomParam>;
  level_id: XmlElem<number>;
  grade_id: XmlElem<number>;
  gdpr: XmlElem<boolean>;
  clear_cur_position(): unknown;
  start_action(): unknown;
  set_basic_position(): unknown;
  get_courses(): unknown;
  get_tests(): unknown;
  assign_course(): unknown;
  assign_test(): unknown;
  get_info(): unknown;
  get_events(): unknown;
  get_groups(): unknown;
  get_event_results(): unknown;
  update_info(): unknown;
  clear_subs_fields(): unknown;
}

type CollaboratorDocument = XmlDocument & { TopElem: CollaboratorDocumentTopElem; };
