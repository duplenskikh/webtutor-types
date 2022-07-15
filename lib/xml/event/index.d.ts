interface EventWebinarSetting {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface EventEventForm {
  form_id?: XmlElem<string>;
}

interface EventStage {
  stage_id?: XmlElem<number>;
  parent_id?: XmlElem<number>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  is_active?: XmlElem<boolean>;
}

interface EventCollaboratorExpenseItem {
  expense_item_id?: XmlElem<number>;
  sum?: XmlElem<number>;
}

interface EventCollaboratorResultColumn {
  column_name?: XmlElem<string>;
  column_value?: XmlElem<string>;
}

interface EventCollaboratorResult {
  id?: XmlElem<number>;
  is_assist?: XmlElem<string>;
  is_confirm?: XmlElem<string>;
  is_banned?: XmlElem<string>;
  not_participate?: XmlElem<string>;
  score?: XmlElem<number>;
  columns?: XmlMultiElem<EventCollaboratorResultColumn>;
}

interface EventCollaborator extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
  last_exist_date?: XmlElem<Date>;
  education_plan_id?: XmlElem<number>;
  request_person_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  controller_code?: XmlElem<string>;
  webinar_url?: XmlElem<string>;
  participation_id?: XmlElem<string>;
  cost_center_id?: XmlElem<number>;
  total_sum?: XmlElem<number>;
  not_pay?: XmlElem<boolean>;
  can_use_camera?: XmlElem<boolean>;
  can_use_microphone?: XmlElem<boolean>;
  current_state?: XmlElem<string>;
  edu_group_name?: XmlElem<string>;
  expense_items?: XmlMultiElem<EventCollaboratorExpenseItem>;
  result?: XmlElem<EventCollaboratorResult>;
}

interface EventUnnamedPersonByOrg {
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  unnamed_person_num?: XmlElem<number>;
  collaborator_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
}

interface EventEvenPreparation {
  even_preparation_id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  status_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  comment_person?: XmlElem<string>;
  webinar_url?: XmlElem<string>;
  participation_id?: XmlElem<string>;
}

interface EventGroup {
  group_id?: XmlElem<number>;
}

interface EventTutor extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
  telephone_out?: XmlElem<string>;
  telephone_in?: XmlElem<string>;
  main?: XmlElem<boolean>;
  webinar_url?: XmlElem<string>;
  participation_id?: XmlElem<string>;
}

interface EventObjectResource {
  object_resource_id?: XmlElem<number>;
}

interface EventContract extends CostCurrencyBase {
  code?: XmlElem<string>;
  date?: XmlElem<Date>;
  legal_entity_name?: XmlElem<string>;
  legal_entity_code?: XmlElem<string>;
  desc?: XmlElem<string>;
}

interface EventExpenseItem {
  expense_item_id?: XmlElem<number>;
  sum?: XmlElem<number>;
  unnamed_person_sum?: XmlElem<number>;
  total_sum?: XmlElem<number>;
}

interface EventFile extends FileBase {
  presentation_id?: XmlElem<number>;
  visibility?: XmlElem<string>;
}

interface EventLibraryMaterial {
  library_material_id?: XmlElem<number>;
}

interface EventLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface EventPhaseCollaborator {
  collaborator_id?: XmlElem<number>;
  is_assist?: XmlElem<boolean>;
}

interface EventPhase {
  id?: XmlElem<string>;
  lector_id?: XmlElem<number>;
  object_resource_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  reserve_desc?: XmlElem<string>;
  collaborators?: XmlMultiElem<EventPhaseCollaborator>;
}

interface EventTest {
  class?: XmlElem<any>;
  id?: XmlElem<number>;
  title?: XmlElem<string>;
  state?: XmlElem<string>;
  start_time?: XmlElem<string>;
  duration?: XmlElem<number>;
}

interface EventRecord {
  class?: XmlElem<string>;
  status?: XmlElem<string>;
  start_time?: XmlElem<string>;
  recorder_id?: XmlElem<number>;
  data?: XmlElem<string>;
  width?: XmlElem<string>;
  height?: XmlElem<string>;
}

interface EventHitt {
  assessment_id?: XmlElem<number>;
  tutor_controller_code?: XmlElem<string>;
  instruction?: XmlElem<string>;
  auto_next_all_answer?: XmlElem<boolean>;
  auto_finish_test?: XmlElem<boolean>;
  use_activated_test?: XmlElem<boolean>;
  port_num?: XmlElem<number>;
  column_num?: XmlElem<number>;
  font_size?: XmlElem<number>;
}

interface EventRegularScheduleExpenseItem {
  expense_item_id?: XmlElem<number>;
  sum?: XmlElem<number>;
}

interface EventRegularSchedule {
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  expense_sum?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  cost_center_type?: XmlElem<string>;
  total_cost?: XmlElem<number>;
  phases_num?: XmlElem<number>;
  expense_items?: XmlMultiElem<EventRegularScheduleExpenseItem>;
}

interface EventViewCollaborator {
  collaborator_id?: XmlElem<number>;
}

interface EventViewLector {
  lector_id?: XmlElem<number>;
}

interface EventViewTutor {
  collaborator_id?: XmlElem<number>;
}

interface EventViewEvenPreparation {
  person_id?: XmlElem<number>;
}

interface EventViewAssessmentPlan {
  assessment_plan_id?: XmlElem<number>;
}

interface EventViewLearningSummaryCollaboratorCourse {
  course_id?: XmlElem<number>;
  active_learning_num?: XmlElem<number>;
  active_learning_state_id?: XmlElem<number>;
  learning_num?: XmlElem<number>;
  learning_state_id?: XmlElem<number>;
}

interface EventViewLearningSummaryCollaboratorResult {
  id?: XmlElem<number>;
  is_assist?: XmlElem<string>;
  is_confirm?: XmlElem<string>;
  not_participate?: XmlElem<string>;
  score?: XmlElem<number>;
}

interface EventViewLearningSummaryCollaborator extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
  is_participant?: XmlElem<boolean>;
  active_learning_state_name?: XmlElem<string>;
  learning_num?: XmlElem<number>;
  learning_state_name?: XmlElem<string>;
  bk_color?: XmlElem<string>;
  courses?: XmlMultiElem<EventViewLearningSummaryCollaboratorCourse>;
  result?: XmlElem<EventViewLearningSummaryCollaboratorResult>;
}

interface EventViewLearningSummaryCourse {
  course_id?: XmlElem<number>;
}

interface EventViewLearningSummary {
  course_id?: XmlElem<number>;
  person_filter?: XmlElem<string>;
  collaborators?: XmlMultiElem<EventViewLearningSummaryCollaborator>;
  courses?: XmlMultiElem<EventViewLearningSummaryCourse>;
}

interface EventView extends DescBase {
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  webinar_system_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  selector?: XmlElem<string>;
  total_sum?: XmlElem<number>;
  unnamed_person_total_sum?: XmlElem<number>;
  is_load_results?: XmlElem<boolean>;
  show_result_fields?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  checked_fields?: XmlElem<boolean>;
  sort_type_id?: XmlElem<string>;
  loop_date?: XmlElem<Date>;
  loop_index?: XmlElem<number>;
  last_start_date?: XmlElem<Date>;
  last_finish_date?: XmlElem<Date>;
  last_distribute_cost_type?: XmlElem<string>;
  last_default_event_result_type_id?: XmlElem<number>;
  recource_selector?: XmlElem<string>;
  recource_tab_selector?: XmlElem<string>;
  result_array?: XmlElem<any>;
  collaborator_array?: XmlElem<any>;
  flag_open_org_sub_group_section?: XmlElem<boolean>;
  collaborators?: XmlMultiElem<EventViewCollaborator>;
  lectors?: XmlMultiElem<EventViewLector>;
  tutors?: XmlMultiElem<EventViewTutor>;
  even_preparations?: XmlMultiElem<EventViewEvenPreparation>;
  assessment_plans?: XmlMultiElem<EventViewAssessmentPlan>;
  learning_summary?: XmlElem<EventViewLearningSummary>;
}

interface EventTopElem extends XmlTopElem<EventDocument>, ObjectCodeNameBase, EducGroupsBase, PathPlacesBase, CostCurrencyTypeBase, CostCentersBase, LectorsBase, GameBonusBase, EduMethodTestingBase, KnowledgePartsBase, CustomElemsBase, CustomDatasBase, CatalogListBase, AdminAccessBase, EventSettingsBase {
  type_id?: XmlElem<string>;
  event_type_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  is_model?: XmlElem<boolean>;
  is_room?: XmlElem<boolean>;
  place_id?: XmlElem<number>;
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
  org_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  group_educ_group_id?: XmlElem<string>;
  unnamed_person_num?: XmlElem<number>;
  unnamed_person_sum?: XmlElem<number>;
  group_formed?: XmlElem<boolean>;
  quota_org?: XmlElem<number>;
  quota_subdivision?: XmlElem<number>;
  quota_person?: XmlElem<number>;
  total_cost?: XmlElem<number>;
  total_cost_plan?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  cost_center_type?: XmlElem<string>;
  distribute_cost_type?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
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
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
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
  need_create_results?: XmlElem<boolean>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  list_variant?: XmlElem<any>;
  role_id?: XmlMultiElem<number>;
  webinar_settings?: XmlMultiElem<EventWebinarSetting>;
  event_forms?: XmlMultiElem<EventEventForm>;
  stages?: XmlMultiElem<EventStage>;
  collaborators?: XmlMultiElem<EventCollaborator>;
  unnamed_person_by_orgs?: XmlMultiElem<EventUnnamedPersonByOrg>;
  even_preparations?: XmlMultiElem<EventEvenPreparation>;
  groups?: XmlMultiElem<EventGroup>;
  tutors?: XmlMultiElem<EventTutor>;
  object_resources?: XmlMultiElem<EventObjectResource>;
  contracts?: XmlMultiElem<EventContract>;
  expense_items?: XmlMultiElem<EventExpenseItem>;
  files?: XmlMultiElem<EventFile>;
  library_materials?: XmlMultiElem<EventLibraryMaterial>;
  learning_tasks?: XmlMultiElem<EventLearningTask>;
  phases?: XmlMultiElem<EventPhase>;
  test?: XmlElem<EventTest>;
  record?: XmlElem<EventRecord>;
  hitt?: XmlElem<EventHitt>;
  regular_schedule?: XmlElem<EventRegularSchedule>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<EventView>;
  person_num?(): any;
  assist_person_num?(): any;
  default_cost_center_id?(): any;
  AddFile?(): any;
  get_chat_messages?(): any;
  send_chat_message?(): any;
  set_status?(): any;
  send_notifications?(): any;
  create_results?(): any;
  change_tutor_list?(): any;
  change_even_preparation_list?(): any;
  change_lector_list?(): any;
  obtain_collaborator?(): any;
  add_group?(): any;
  get_workflow_id?(): any;
  create_certificate?(): any;
  start_action?(): any;
  clear_elems?(): any;
  activate_test?(): any;
  assign_qualification?(): any;
  check_request_quote?(): any;
  create_event_phases?(): any;
  filling_event_phases?(): any;
  distribute_cost_centers?(): any;
  distribute_total_cost?(): any;
  obtain_pay_phases?(): any;
  save_distributed_total_cost?(): any;
  calc_duration_plan?(): any;
  update_event_results?(): any;
  update_collaborator_common_filling?(): any;
  addPerson?(): any;
  delPerson?(): any;
  changeTutorList?(): any;
  get_info?(): any;
  remove_collaborator?(): any;
  get_webinar_admin_template?(): any;
  call_webinar_system_method?(): any;
  get_webinar_setting?(): any;
  set_webinar_setting?(): any;
  get_webinar_url?(): any;
  get_webinar_record_url?(): any;
  get_webinar_record_download_url?(): any;
}

type EventDocument = XmlDocument<EventTopElem>;
