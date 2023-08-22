interface EventDocumentWebinarSetting {
  name: XmlElem<string>;
  type: XmlElem<string>;
  value: XmlElem<string>;
}

interface EventDocumentEventForm {
  form_id: XmlElem<string>;
}

interface EventDocumentStage {
  stage_id: XmlElem<number>;
  parent_id: XmlElem<number>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_active: XmlElem<boolean>;
}

interface EventDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number>;
  last_exist_date: XmlElem<Date>;
  education_plan_id: XmlElem<number>;
  request_person_id: XmlElem<number>;
  active_test_learning_id: XmlElem<number>;
  controller_code: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
  not_pay: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
}

interface EventDocumentUnnamedPersonByOrg {
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  unnamed_person_num: XmlElem<number>;
  collaborator_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

interface EventDocumentEvenPreparation {
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

interface EventDocumentGroup {
  group_id: XmlElem<number>;
}

interface EventDocumentTutor extends PersonFillingBase {
  collaborator_id: XmlElem<number>;
  telephone_out: XmlElem<string>;
  telephone_in: XmlElem<string>;
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface EventDocumentObjectResource {
  object_resource_id: XmlElem<number>;
}

interface EventDocumentContract extends CostCurrencyBase {
  code: XmlElem<string>;
  date: XmlElem<Date>;
  legal_entity_name: XmlElem<string>;
  legal_entity_code: XmlElem<string>;
  desc: XmlElem<string>;
}

interface EventDocumentExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
}

interface EventDocumentFile extends FileListBaseFile {
  presentation_id: XmlElem<number>;
  visibility: XmlElem<string>;
}

interface EventDocumentLibraryMaterial {
  library_material_id: XmlElem<number>;
}

interface EventDocumentLearningTask {
  learning_task_id: XmlElem<number>;
}

interface EventDocumentPhaseCollaborator {
  collaborator_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
}
interface EventDocumentPhase {
  id: XmlElem<string>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
  collaborators: XmlMultiElem<EventDocumentPhaseCollaborator>;
}

type EventDocumentTopElem = XmlTopElem & { Doc: EventDocument } &
ObjectCodeNameBase &
EducGroupsBase &
PathPlacesBase &
CostCurrencyTypeBase &
CostCentersBase &
LectorsBase &
GameBonusBase &
EduMethodTestingBase &
KnowledgePartsBase &
CustomElemsBase &
CustomDatasBase &
CatalogListBase &
AdminAccessBase &
EventSettingsBase & {
  type_id: XmlElem<string>;
  event_type_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_model: XmlElem<boolean>;
  is_room: XmlElem<boolean>;
  place_id: XmlElem<number>;
  place: XmlElem<string>;
  vclass_host: XmlElem<string>;
  use_camera_capture: XmlElem<boolean>;
  login_with_camera_only: XmlElem<boolean>;
  capture_rate: XmlElem<number>;
  record_status: XmlElem<string>;
  record_exists: XmlElem<boolean>;
  record_id: XmlElem<number>;
  record_date: XmlElem<Date>;
  record_download_count: XmlElem<number>;
  record_view_count: XmlElem<number>;
  bandwidth: XmlElem<number>;
  use_record_camera_capture: XmlElem<boolean>;
  view_with_camera_only: XmlElem<boolean>;
  record_capture_rate: XmlElem<number>;
  current_presentation_id: XmlElem<number>;
  webinar_system_id: XmlElem<number>;
  webinar_settings: XmlMultiElem<EventDocumentWebinarSetting>;
  use_vclass: XmlElem<boolean>;
  vclass_setting_id: XmlElem<number>;
  show_record: XmlElem<boolean>;
  allow_record_download: XmlElem<boolean>;
  use_reserve_server: XmlElem<boolean>;
  compound_program_id: XmlElem<number>;
  education_program_id: XmlElem<number>;
  education_method_id: XmlElem<number>;
  program_id: XmlElem<number>;
  create_compound_program_id: XmlElem<number>;
  training_plan_id: XmlElem<number>;
  education_org_id: XmlElem<number>;
  education_org_type: XmlElem<string>;
  education_org_name: XmlElem<string>;
  course_id: XmlElem<number>;
  forum_id: XmlElem<number>;
  chat_id: XmlElem<number>;
  poll_id: XmlElem<number>;
  status_id: XmlElem<string>;
  is_public: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  allow_guest_login: XmlElem<boolean>;
  guest_restrictions: XmlElem<number>;
  is_open_case: XmlElem<boolean>;
  public_answers: XmlElem<boolean>;
  duration_plan: XmlElem<number>;
  duration_days_plan: XmlElem<number>;
  duration_fact: XmlElem<number>;
  duration_days_fact: XmlElem<number>;
  max_person_num: XmlElem<number>;
  min_person_num: XmlElem<number>;
  person_num(): unknown;
  assist_person_num(): unknown;
  course_finished: XmlElem<number>;
  course_process: XmlElem<number>;
  course_started: XmlElem<number>;
  course_began: XmlElem<number>;
  test_finished: XmlElem<number>;
  test_process: XmlElem<number>;
  test_started: XmlElem<number>;
  test_began: XmlElem<number>;
  tutor_main: XmlElem<string>;
  contract_id: XmlElem<number>;
  organizational_form: XmlElem<string>;
  event_form: XmlElem<string>;
  event_forms: XmlMultiElem<EventDocumentEventForm>;
  stages: XmlMultiElem<EventDocumentStage>;
  org_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  collaborators: XmlMultiElem<EventDocumentCollaborator>;
  group_educ_group_id: XmlElem<string>;
  unnamed_person_by_orgs: XmlMultiElem<EventDocumentUnnamedPersonByOrg>;
  unnamed_person_num: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
  group_formed: XmlElem<boolean>;
  quota_org: XmlElem<number>;
  quota_subdivision: XmlElem<number>;
  quota_person: XmlElem<number>;
  even_preparations: XmlMultiElem<EventDocumentEvenPreparation>;
  groups: XmlMultiElem<EventDocumentGroup>;
  tutors: XmlMultiElem<EventDocumentTutor>;
  object_resources: XmlMultiElem<EventDocumentObjectResource>;
  total_cost: XmlElem<number>;
  total_cost_plan: XmlElem<number>;
  contracts: XmlMultiElem<EventDocumentContract>;
  cost_center_id: XmlElem<number>;
  cost_center_type: XmlElem<string>;
  default_cost_center_id(): unknown;
  distribute_cost_type: XmlElem<string>;
  expense_items: XmlMultiElem<EventDocumentExpenseItem>;
  budget_period_id: XmlElem<number>;
  files: XmlMultiElem<EventDocumentFile>;
  library_materials: XmlMultiElem<EventDocumentLibraryMaterial>;
  learning_tasks: XmlMultiElem<EventDocumentLearningTask>;
  AddFile(): unknown;
  default_response_type_id: XmlElem<number>;
  mandatory_fill_response: XmlElem<boolean>;
  default_request_type_id: XmlElem<number>;
  use_object_workflow: XmlElem<boolean>;
  default_event_result_type_id: XmlElem<number>;
  main_material_url: XmlElem<string>;
  main_material_width: XmlElem<string>;
  main_material_height: XmlElem<string>;
  use_video: XmlElem<boolean>;
  video_url: XmlElem<string>;
  video_login: XmlElem<string>;
  video_password: XmlElem<string>;
  use_audio: XmlElem<boolean>;
  audio_url: XmlElem<string>;
  audio_channel_login: XmlElem<string>;
  audio_channel_password: XmlElem<string>;
  audio_login: XmlElem<string>;
  audio_password: XmlElem<string>;
  date_request_begin: XmlElem<Date>;
  date_request_over: XmlElem<Date>;
  date_request_rejection_over: XmlElem<Date>;
  parent_event_id: XmlElem<number>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  get_chat_messages(): unknown;
  send_chat_message(): unknown;
  phases: XmlMultiElem<EventDocumentPhase>;
  disp_collaborator_phase_presence: XmlElem<boolean>;
  disp_persons_for_all: XmlElem<boolean>;
  has_lector_appraise: XmlElem<boolean>;
  has_lector_comp: XmlElem<boolean>;
  has_lector_quest: XmlElem<boolean>;
  lector_restype: XmlElem<number>;
  lector_date_start: XmlElem<Date>;
  has_self_appraise: XmlElem<boolean>;
  has_self_comp: XmlElem<boolean>;
  has_self_quest: XmlElem<boolean>;
  self_restype: XmlElem<number>;
  self_date_start: XmlElem<Date>;
  has_manager_appraise: XmlElem<boolean>;
  has_manager_comp: XmlElem<boolean>;
  has_manager_quest: XmlElem<boolean>;
  manager_restype: XmlElem<number>;
  manager_date_start: XmlElem<Date>;
  disp_all_assessment_plan: XmlElem<boolean>;
  need_create_results: XmlElem<boolean>;
  set_status(status: string): unknown;
  send_notifications(): unknown;
  create_results(): unknown;
  change_tutor_list(): unknown;
  change_even_preparation_list(): unknown;
  change_lector_list(): unknown;
  obtain_collaborator(): unknown;
  add_group(groupId: number): number;
  get_workflow_id(): unknown;
  create_certificate(): unknown;
  start_action(): unknown;
  clear_elems(): unknown;
  activate_test(): unknown;
  assign_qualification(): unknown;
  check_request_quote(): unknown;
  create_event_phases(): unknown;
  filling_event_phases(): unknown;
  distribute_cost_centers(): unknown;
  distribute_total_cost(): unknown;
  obtain_pay_phases(): unknown;
  save_distributed_total_cost(): unknown;
  calc_duration_plan(): unknown;
  update_event_results(): unknown;
  update_collaborator_common_filling(): unknown;
  addPerson(data: {
    iPersonID: number,
    bDoObtain: boolean,
    bDoFilling: boolean,
    bDoSave: boolean,
    bCreateEventResult: boolean,
    bSendNotification: boolean
  }): unknown;
  delPerson(): unknown;
  changeTutorList(): unknown;
  get_info(): unknown;
  remove_collaborator(collaboratorId: number): unknown;
  get_webinar_admin_template(): unknown;
  call_webinar_system_method(): unknown;
  get_webinar_setting(): unknown;
  set_webinar_setting(): unknown;
  get_webinar_url(): unknown;
  get_webinar_record_url(): unknown;
  get_webinar_record_download_url(): unknown;
  role_id: XmlMultiElem<number>;
};

type EventDocument = XmlDocument & {
  TopElem: EventDocumentTopElem;
};
