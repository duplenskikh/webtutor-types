interface IWTEventTest {
  class?: XmlElem<any>;
  id?: XmlElem<number>;
  title?: XmlElem<string>;
  state?: XmlElem<string>;
  start_time?: XmlElem<string>;
  duration?: XmlElem<number>;
}

interface IWTEventRecord {
  class?: XmlElem<string>;
  status?: XmlElem<string>;
  start_time?: XmlElem<string>;
  recorder_id?: XmlElem<number>;
  data?: XmlElem<string>;
  width?: XmlElem<string>;
  height?: XmlElem<string>;
}

interface IWTEventForm {
  form_id: XmlElem<string>;
}

interface IWTEventWebinarSettings {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTEventStage {
  stage_id: XmlElem<number>;
  parent_id: XmlElem<number>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_active: XmlElem<boolean>;
}

interface IWTExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
}

interface IWTEventUnnamedPersonByOrgs {
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  unnamed_person_num: XmlElem<number>;
  collaborator_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

interface IWTEventCollaborator extends IWTPersonFillingBase {
  collaborator_id: XmlElem<number>;
  last_exist_date: XmlElem<Date>;
  education_plan_id: XmlElem<number>;
  request_person_id: XmlElem<number>;
  active_test_learning_id: XmlElem<number>;
  controller_code: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
  expense_items: XmlMultiElem<IWTExpenseItem>;
  cost_center_id: XmlElem<number>;
  total_sum: XmlElem<number>;
  not_pay: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
  current_state: XmlElem<string>;
  edu_group_name: XmlElem<string>;
}

interface IWTEventEvenPreparations {
  even_preparation_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status_id: XmlElem<string>;
  comment: XmlElem<string>;
  comment_person: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface IWTEventHitt {
  assessment_id: XmlElem<number>;
  tutor_controller_code: XmlElem<string>;
  instruction: XmlElem<string>;
  auto_next_all_answer: XmlElem<boolean>;
  auto_finish_test: XmlElem<boolean>;
  use_activated_test: XmlElem<boolean>;
  port_num: XmlElem<number>;
  column_num: XmlElem<number>;
  font_size: XmlElem<number>;
}

interface IWTEventGroup {
  group_id: XmlElem<number>;
}

interface IWTEventTutor extends IWTPersonFillingBase {
  collaborator_id: XmlElem<number>;
  telephone_out: XmlElem<string>;
  telephone_in: XmlElem<string>;
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface IWTEventObjectResource {
  object_resource_id: XmlElem<number>;
}

interface IWTEventContract
  // NOT_IMPLEMENTED cost_currency_type_base
{
  code: XmlElem<string>;
  date: XmlElem<Date>;
  legal_entity_name: XmlElem<string>;
  legal_entity_code: XmlElem<string>;
  desc: XmlElem<string>;
}

interface IWTEventFile extends IWTFileBase {
  presentation_id: XmlElem<number>;
  visibility: XmlElem<string>;
}

interface IWTEventExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
  total_sum: XmlElem<number>;
}

interface IWTEventLibraryMaterial {
  library_material_id: XmlElem<number>;
}

interface IWTEventLearningTask {
  learning_task_id: XmlElem<number>;
}

interface IWTEventRegularScheduleExpenseItem {
  expense_item_id?: XmlElem<number>;
  sum?: XmlElem<number>;
}

interface IWTEventRegularSchedule
  // NOT_IMPLEMENTED ms_week_schedule_base
{
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  expense_items: XmlMultiElem<IWTEventRegularScheduleExpenseItem>;
  expense_sum?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  cost_center_type?: XmlElem<string>;
  total_cost?: XmlElem<number>;
  phases_num?: XmlElem<number>;
}

interface IWTEventTopElem extends IWTXmlDocumentTopElem<IWTEventTopElem>,
  IWTObjectCodeNameBase,
  // NOT_IMPLEMENTED educ_groups_base,
  // NOT_IMPLEMENTED path_places_base,
  // NOT_IMPLEMENTED cost_currency_type_base,
  // NOT_IMPLEMENTED cost_centers_base,
  // NOT_IMPLEMENTED cost_centers_base,
  IWTLectorsBase,
  IWTGameBonusBase,
  // NOT_IMPLEMENTED edu_method_testing_base
  IWTKnowledgePartsBase,
  IWTCustomElemsBase,
  // NOT_IMPLEMENTED custom_datas_base
  IWTCatalogListBase,
  IWTEventSettingsBase {
  /** Код типа мероприятия */
  type_id?: XmlElem<string>;
  /** ID типа мероприятия */
  event_type_id?: XmlElem<number>;
  /** Дата начала мероприятия */
  start_date?: XmlElem<Date>;
  /** Дата окончания мероприятия */
  finish_date?: XmlElem<Date>;
  /** Является ли мероприятия эталонным */
  is_model?: XmlElem<boolean>;
  is_room?: XmlElem<boolean>;
  /** ID расположения мероприятия */
  place_id?: XmlElem<number>;
  /** Название места проведения мероприятия */
  place?: XmlElem<string>;
  vclass_host?: XmlElem<string>;
  use_camera_capture?: XmlElem<boolean>;
  login_with_camera_only?: XmlElem<boolean>;
  capture_rate?: XmlElem<number>;
  record_status?: XmlElem<string>;
  record_exists?: XmlElem<boolean>;
  record_id?: XmlElem<number>;
  record_date?: XmlElem<Date>;
  record_download_count?: XmlElem<number>;
  record_view_count?: XmlElem<number>;
  bandwidth?: XmlElem<number>;
  use_record_camera_capture?: XmlElem<boolean>;
  view_with_camera_only?: XmlElem<boolean>;
  record_capture_rate?: XmlElem<number>;
  current_presentation_id?: XmlElem<number>;
  webinar_system_id?: XmlElem<number>;
  test?: XmlElem<IWTEventTest>;
  record?: XmlElem<IWTEventRecord>;
  webinar_settings?: XmlMultiElem<IWTEventWebinarSettings>;
  use_vclass?: XmlElem<boolean>;
  vclass_setting_id?: XmlElem<number>;
  show_record?: XmlElem<boolean>;
  allow_record_download?: XmlElem<boolean>;
  use_reserve_server?: XmlElem<boolean>;
  compound_program_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  program_id?: XmlElem<number>;
  create_compound_program_id?: XmlElem<number>;
  training_plan_id?: XmlElem<number>;
  education_org_id?: XmlElem<number>;
  education_org_type?: XmlElem<string>;
  education_org_name?: XmlElem<string>;
  course_id?: XmlElem<number>;
  forum_id?: XmlElem<number>;
  chat_id?: XmlElem<number>;
  poll_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  is_public?: XmlElem<boolean>;
  is_open?: XmlElem<boolean>;
  allow_guest_login?: XmlElem<boolean>;
  guest_restrictions?: XmlElem<number>;
  is_open_case?: XmlElem<boolean>;
  public_answers?: XmlElem<boolean>;
  duration_plan?: XmlElem<number>;
  duration_days_plan?: XmlElem<number>;
  duration_fact?: XmlElem<number>;
  duration_days_fact?: XmlElem<number>;
  max_person_num?: XmlElem<number>;
  min_person_num?: XmlElem<number>;
  person_num?(): number;
  assist_person_num?(): number;
  course_finished?: XmlElem<number>;
  course_process?: XmlElem<number>;
  course_started?: XmlElem<number>;
  course_began?: XmlElem<number>;
  test_finished?: XmlElem<number>;
  test_process?: XmlElem<number>;
  test_started?: XmlElem<number>;
  test_began?: XmlElem<number>;
  tutor_main?: XmlElem<string>;
  contract_id?: XmlElem<number>;
  organizational_form?: XmlElem<string>;
  event_form?: XmlElem<string>;
  event_forms?: XmlMultiElem<IWTEventForm>;
  stages?: XmlMultiElem<IWTEventStage>;
  org_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  collaborators?: XmlMultiElem<IWTEventCollaborator>;
  group_educ_group_id?: XmlElem<string>;
  unnamed_person_by_orgs?: XmlMultiElem<IWTEventUnnamedPersonByOrgs>;
  unnamed_person_num?: XmlElem<number>;
  unnamed_person_sum?: XmlElem<number>;
  group_formed?: XmlElem<boolean>;
  quota_org?: XmlElem<number>;
  quota_subdivision?: XmlElem<number>;
  quota_person?: XmlElem<number>;
  even_preparations?: XmlMultiElem<IWTEventEvenPreparations>;
  hitt: XmlElem<IWTEventHitt>;
  groups?: XmlMultiElem<IWTEventGroup>;
  tutors?: XmlMultiElem<IWTEventTutor>;
  object_resources?: XmlMultiElem<IWTEventObjectResource>;
  total_cost?: XmlElem<number>;
  total_cost_plan?: XmlElem<number>;
  contracts?: XmlMultiElem<IWTEventContract>;
  cost_center_id?: XmlElem<number>;
  cost_center_type?: XmlElem<string>;
  default_cost_center_id?: XmlElem<number>;
  distribute_cost_type?: XmlElem<string>;
  expense_items?: XmlMultiElem<IWTEventExpenseItem>;
  budget_period_id?: XmlElem<number>;
  files?: XmlMultiElem<IWTEventFile>;
  library_materials?: XmlMultiElem<IWTEventLibraryMaterial>;
  learning_tasks?: XmlMultiElem<IWTEventLearningTask>;
  AddFile?(resourceId: number, resourceDocument?: IWTResourceDocument): void;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  default_request_type_id?: XmlElem<number>;
  use_object_workflow?: XmlElem<boolean>;
  default_event_result_type_id?: XmlElem<number>;
  main_material_url?: XmlElem<string>;
  main_material_width?: XmlElem<string>;
  main_material_height?: XmlElem<string>;
  use_video?: XmlElem<boolean>;
  video_url?: XmlElem<string>;
  video_login?: XmlElem<string>;
  video_password?: XmlElem<string>;
  use_audio?: XmlElem<boolean>;
  audio_url?: XmlElem<string>;
  audio_channel_login?: XmlElem<string>;
  audio_channel_password?: XmlElem<string>;
  audio_login?: XmlElem<string>;
  audio_password?: XmlElem<string>;
  date_request_begin?: XmlElem<Date>;
  date_request_over?: XmlElem<Date>;
  date_request_rejection_over?: XmlElem<Date>;
  parent_event_id?: XmlElem<number>;
  regular_schedule?: XmlElem<IWTEventRegularSchedule>;
  access?: XmlElem<IWTAccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  get_chat_messages?(dtLastMessageParam: string | Date): XmlMultiElem<any>;
  send_chat_message?(sTextParam: string, sFullnameParam: string): boolean;
  phases?: XmlMultiElem<IWTEventPhase>;


  cost?: XmlElem<string>;
  lectors?: XmlMultiElem<IWTEventLector>;
  cost_type?: XmlElem<string>;
  disp_collaborator_phase_presence?: XmlElem<boolean>;
  disp_persons_for_all?: XmlElem<boolean>;
  has_lector_appraise?: XmlElem<boolean>;
  has_lector_comp?: XmlElem<boolean>;
  has_lector_quest?: XmlElem<boolean>;
  lector_restype?: XmlElem<number>;
  lector_date_start?: XmlElem<Date>;
  has_self_appraise?: XmlElem<boolean>;
  has_self_comp?: XmlElem<boolean>;
  has_self_quest?: XmlElem<boolean>;
  self_restype?: XmlElem<number>;
  self_date_start?: XmlElem<Date>;
  has_manager_appraise?: XmlElem<boolean>;
  has_manager_comp?: XmlElem<boolean>;
  has_manager_quest?: XmlElem<boolean>;
  manager_restype?: XmlElem<number>;
  manager_date_start?: XmlElem<Date>;
  disp_all_assessment_plan?: XmlElem<boolean>;
  /**
   * Устанавливает статус мероприятию
   * @param { string } newStatus новый статус мероприятия
   * @param bSendNotificationsParam 
   * @param oScreenParam 
   */
  set_status?(newStatus: string, bSendNotificationsParam?: boolean, oScreenParam?: Object): void;
  send_notifications?(sSendTypeParam: string): boolean;
  create_results?(): any;
  change_tutor_list?(): any;
  change_even_preparation_list?(): any;
  change_lector_list?(): any;
  obtain_collaborator?(_person_id: any, _person_doc?: IWTCollaboratorTopElem): any;
  add_group?(_group_id: any): any;
  get_workflow_id?(): any;
  create_certificate?(_type_id: any, _type_doc: any): any;
  start_action?(sTypeParam: any): any;
  clear_elems?(): any;
  activate_test?(_test_id: any, _test_doc: any, _duration: any, _start_learning_date: any, _last_learning_date: any, sActTypeParam: any, bSkipDismissed: any): any;
  assign_qualification?(_qualification_id: any, _assignment_date: any, _expiration_date: any, _send_mail: any): any;
  check_request_quote?(_request_id: any, _request_doc: any): any;
  create_event_phases?(): any;
  filling_event_phases?(): any;
  distribute_cost_centers?(): any;
  distribute_total_cost?(): any;
  obtain_pay_phases?(): any;
  save_distributed_total_cost?(_result_array: any): any;
  calc_duration_plan?(): any;
  update_event_results?(): any;
  addPerson?(oInputParam: any): any;
  delPerson?(oInputParam: any): any;
  changeTutorList?(oInputParam: any): any;
  get_info?(): any;
  remove_collaborator?(iPersonIdParam: any): any;
  get_webinar_admin_template?(): any;
  get_webinar_setting?(sSettingNameParam: any): any;
  call_webinar_system_method?(sMethodNameParam: any, oParams: any, bReloadDocument: any): any;
  set_webinar_setting?(sSettingNameParam: any, sSettingValueParam: any, sSettingTypeParam: any): any;
  get_webinar_url?(iUserIdParam: any, sUrl: any): any;
  get_webinar_record_url?(sCurrentHostParam: any): any;
  get_webinar_record_download_url?(sCurrentHostParam: any): any;
}

type IWTEventDocument = IWTXmlDocument<IWTEventTopElem>;
