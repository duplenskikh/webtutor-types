interface EventDocumentTest {
  class: XmlElem<unknown>;
  id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  title: XmlElem<string>;
  state: XmlElem<string>;
  start_time: XmlElem<string>;
  duration: XmlElem<number>;
}

interface EventDocumentRecord {
  class: XmlElem<string>;
  status: XmlElem<string>;
  start_time: XmlElem<string>;
  recorder_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  data: XmlElem<string>;
  width: XmlElem<string>;
  height: XmlElem<string>;
}

interface EventDocumentWebinarSetting {
  name: XmlElem<string>;
  type: XmlElem<string>;
  value: XmlElem<string>;
}

interface EventDocumentWebinarSystemField {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface EventDocumentEventForm {
  form_id: XmlElem<string, typeof lists.event_forms>;
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
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  last_exist_date: XmlElem<Date>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  request_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  active_test_learning_id: XmlElem<number, ActiveTestLearningCatalogDocumentTopElem>;
  controller_code: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
  not_pay: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
}

interface EventDocumentUnnamedPersonByOrg {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string>;
  unnamed_person_num: XmlElem<number>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
}

interface EventDocumentEvenPreparation {
  even_preparation_id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  comment: XmlElem<string>;
  comment_person: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface EventDocumentHitt {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  tutor_controller_code: XmlElem<string>;
  instruction: XmlElem<string>;
  auto_next_all_answer: XmlElem<boolean>;
  auto_finish_test: XmlElem<boolean>;
  use_activated_test: XmlElem<boolean>;
  port_num: XmlElem<number>;
  column_num: XmlElem<number>;
  font_size: XmlElem<number>;
}

interface EventDocumentGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface EventDocumentTutor extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  telephone_out: XmlElem<string>;
  telephone_in: XmlElem<string>;
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface EventDocumentObjectResource {
  object_resource_id: XmlElem<number, ObjectResourceCatalogDocumentTopElem>;
}

interface EventDocumentContract extends CostCurrencyBase {
  code: XmlElem<string>;
  date: XmlElem<Date>;
  legal_entity_name: XmlElem<string>;
  legal_entity_code: XmlElem<string>;
  desc: XmlElem<string>;
}

interface EventDocumentExpenseItem {
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
}

interface EventDocumentFile extends FileBase {
  presentation_id: XmlElem<number>;
  visibility: XmlElem<string, typeof common.event_file_visibility_types>;
}

interface EventDocumentLibraryMaterial {
  library_material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
}

interface EventDocumentLearningTask {
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
}

interface EventDocumentRegularScheduleExpenseItem {
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number>;
}

interface EventDocumentRegularSchedule extends MsWeekScheduleBase {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  expense_items: XmlMultiElem<EventDocumentRegularScheduleExpenseItem>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  cost_center_type: XmlElem<string>;
  total_cost: XmlElem<number>;
  phases_num: XmlElem<number>;
}

interface EventDocumentPhaseCollaborator {
  collaborator_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
}

interface EventDocumentPhase {
  id: XmlElem<string>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number, ObjectResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
  collaborators: XmlMultiElem<EventDocumentPhaseCollaborator>;
}

interface EventDocumentNotificationReminder {
  id: XmlElem<string>;
  minutes: XmlElem<number>;
  sended: XmlElem<boolean>;
}

type EventDocumentTopElem = XmlTopElem &
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
  Doc: EventDocument;
  type_id: XmlElem<string, typeof common.event_types>;
  event_type_id: XmlElem<number, EventTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_model: XmlElem<boolean>;
  is_room: XmlElem<boolean>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  place: XmlElem<string>;
  vclass_host: XmlElem<string>;
  use_camera_capture: XmlElem<boolean>;
  login_with_camera_only: XmlElem<boolean>;
  capture_rate: XmlElem<number>;
  record_status: XmlElem<string>;
  record_exists: XmlElem<boolean>;
  record_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  record_date: XmlElem<Date>;
  record_download_count: XmlElem<number>;
  record_view_count: XmlElem<number>;
  bandwidth: XmlElem<number>;
  use_record_camera_capture: XmlElem<boolean>;
  view_with_camera_only: XmlElem<boolean>;
  record_capture_rate: XmlElem<number>;
  current_presentation_id: XmlElem<number>;
  webinar_system_id: XmlElem<number, WebinarSystemCatalogDocumentTopElem>;
  test: XmlElem<EventDocumentTest>;
  record: XmlElem<EventDocumentRecord>;
  webinar_settings: XmlMultiElem<EventDocumentWebinarSetting>;
  webinar_system_fields: XmlMultiElem<EventDocumentWebinarSystemField>;
  use_vclass: XmlElem<boolean>;
  vclass_setting_id: XmlElem<number, VclassSettingCatalogDocumentTopElem>;
  show_record: XmlElem<boolean>;
  allow_record_download: XmlElem<boolean>;
  use_reserve_server: XmlElem<boolean>;
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  program_id: XmlElem<number>;
  create_compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  training_plan_id: XmlElem<number, TrainingPlanCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  education_org_type: XmlElem<string>;
  education_org_name: XmlElem<string>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  chat_id: XmlElem<number, ChatCatalogDocumentTopElem>;
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.event_status_types>;
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
  person_num(): number;
  assist_person_num(): number;
  course_finished: XmlElem<number>;
  course_process: XmlElem<number>;
  course_started: XmlElem<number>;
  course_began: XmlElem<number>;
  test_finished: XmlElem<number>;
  test_process: XmlElem<number>;
  test_started: XmlElem<number>;
  test_began: XmlElem<number>;
  tutor_main: XmlElem<string>;
  contract_id: XmlElem<number, ContractCatalogDocumentTopElem>;
  organizational_form: XmlElem<string, typeof lists.organizational_forms>;
  event_form: XmlElem<string, typeof lists.event_forms>;
  event_forms: XmlMultiElem<EventDocumentEventForm>;
  stages: XmlMultiElem<EventDocumentStage>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
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
  hitt: XmlElem<EventDocumentHitt>;
  groups: XmlMultiElem<EventDocumentGroup>;
  tutors: XmlMultiElem<EventDocumentTutor>;
  object_resources: XmlMultiElem<EventDocumentObjectResource>;
  total_cost: XmlElem<number>;
  total_cost_plan: XmlElem<number>;
  contracts: XmlMultiElem<EventDocumentContract>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  cost_center_type: XmlElem<string>;
  default_cost_center_id(): number;
  distribute_cost_type: XmlElem<string>;
  expense_items: XmlMultiElem<EventDocumentExpenseItem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  files: XmlMultiElem<EventDocumentFile>;
  library_materials: XmlMultiElem<EventDocumentLibraryMaterial>;
  learning_tasks: XmlMultiElem<EventDocumentLearningTask>;
  AddFile(resourceId: number, docResource: unknown): void;
  default_response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  default_request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  use_object_workflow: XmlElem<boolean>;
  default_event_result_type_id: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
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
  parent_event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  regular_schedule: XmlElem<EventDocumentRegularSchedule>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  get_chat_messages(dtLastMessage: Date): unknown;
  send_chat_message(text: string, fullname: string): boolean;
  phases: XmlMultiElem<EventDocumentPhase>;
  disp_collaborator_phase_presence: XmlElem<boolean>;
  disp_persons_for_all: XmlElem<boolean>;
  has_lector_appraise: XmlElem<boolean>;
  has_lector_comp: XmlElem<boolean>;
  has_lector_quest: XmlElem<boolean>;
  lector_restype: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
  lector_date_start: XmlElem<Date>;
  has_self_appraise: XmlElem<boolean>;
  has_self_comp: XmlElem<boolean>;
  has_self_quest: XmlElem<boolean>;
  self_restype: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
  self_date_start: XmlElem<Date>;
  has_manager_appraise: XmlElem<boolean>;
  has_manager_comp: XmlElem<boolean>;
  has_manager_quest: XmlElem<boolean>;
  manager_restype: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
  manager_date_start: XmlElem<Date>;
  disp_all_assessment_plan: XmlElem<boolean>;
  need_create_results: XmlElem<boolean>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): void;
  send_notifications(sendType: string): boolean;
  create_results(): number;
  change_tutor_list(): unknown;
  change_even_preparation_list(): unknown;
  change_lector_list(): unknown;
  obtain_collaborator(personId: number, personDoc: unknown): unknown;
  add_group(groupId: number): unknown;
  get_workflow_id(): null;
  create_certificate(typeId: number, typeDoc: unknown, createByNotAssist: boolean): unknown;
  start_action(type: string, gridItemName: unknown): number;
  clear_elems(): unknown;
  activate_test(testId: number, testDoc: unknown, duration: unknown, startLearningDate: unknown, lastLearningDate: unknown, actType: string, skipDismissed: boolean, useProctoring: boolean, proctorPreferId: number, activateOnlyAssist: boolean): unknown;
  assign_qualification(qualificationId: number, assignmentDate: unknown, expirationDate: unknown, sendMail: unknown): unknown;
  check_request_quote(requestId: number, requestDoc: unknown): unknown;
  create_event_phases(): unknown;
  filling_event_phases(): unknown;
  distribute_cost_centers(): unknown;
  distribute_total_cost(): unknown;
  obtain_pay_phases(): unknown;
  save_distributed_total_cost(resultArray: unknown): unknown;
  calc_duration_plan(): unknown;
  update_event_results(): unknown;
  update_collaborator_common_filling(): unknown;
  addPerson(input: unknown): unknown;
  delPerson(input: unknown): unknown;
  changeTutorList(input: unknown): unknown;
  get_info(): null | Object;
  remove_collaborator(personId: number): unknown;
  get_webinar_admin_template(): unknown;
  call_webinar_system_method(methodName: string, params: unknown, reloadDocument: boolean): unknown;
  get_webinar_setting(settingName: string, settingType: string): unknown;
  set_webinar_setting(settingName: string, settingValue: string, settingType: string): unknown;
  get_webinar_url(userId: number, url: string): unknown;
  get_webinar_record_url(currentHost: string): unknown;
  get_webinar_record_download_url(currentHost: string): unknown;
  get_finish_date(newDate: string): unknown;
  notification_reminders: XmlMultiElem<EventDocumentNotificationReminder>;
  role_id: XmlMultiElemObject<number>;
};

type EventDocument = XmlDocument & {
  TopElem: EventDocumentTopElem;
  event: EventDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  OnInit(): void;
  OnClientSave(): void;
  OnLocalInit(): void;
  DocDesc(): string;
};
