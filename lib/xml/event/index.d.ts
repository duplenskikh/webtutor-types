interface EventDocumentTest {
  class: XmlElem<unknown | null>;
  id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  title: XmlElem<string | null>;
  state: XmlElem<string | null>;
  start_time: XmlElem<string | null>;
  duration: XmlElem<number | null>;
}

interface EventDocumentRecord {
  class: XmlElem<string | null>;
  status: XmlElem<string | null>;
  start_time: XmlElem<string | null>;
  recorder_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  data: XmlElem<string | null>;
  width: XmlElem<string | null>;
  height: XmlElem<string | null>;
}

interface EventDocumentWebinarSetting {
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface EventDocumentWebinarSystemField {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface EventDocumentEventForm {
  form_id: XmlElem<string | null, typeof lists.event_forms>;
}

interface EventDocumentStage {
  stage_id: XmlElem<number | null>;
  parent_id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  is_active: XmlElem<boolean | null>;
}

interface EventDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  last_exist_date: XmlElem<Date | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  request_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  active_test_learning_id: XmlElem<number | null, ActiveTestLearningCatalogDocumentTopElem>;
  controller_code: XmlElem<string | null>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
  not_pay: XmlElem<boolean | null>;
  can_use_camera: XmlElem<boolean | null>;
  can_use_microphone: XmlElem<boolean | null>;
}

interface EventDocumentUnnamedPersonByOrg {
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string | null>;
  unnamed_person_num: XmlElem<number | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
}

interface EventDocumentEvenPreparation {
  even_preparation_id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  plan_date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  comment: XmlElem<string | null>;
  comment_person: XmlElem<string | null>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
}

interface EventDocumentHitt {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  tutor_controller_code: XmlElem<string | null>;
  instruction: XmlElem<string | null>;
  auto_next_all_answer: XmlElem<boolean>;
  auto_finish_test: XmlElem<boolean>;
  use_activated_test: XmlElem<boolean>;
  port_num: XmlElem<number | null>;
  column_num: XmlElem<number>;
  font_size: XmlElem<number>;
}

interface EventDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface EventDocumentTutor extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  telephone_out: XmlElem<string | null>;
  telephone_in: XmlElem<string | null>;
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
}

interface EventDocumentObjectResource {
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
}

interface EventDocumentContract extends CostCurrencyBase {
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  legal_entity_name: XmlElem<string | null>;
  legal_entity_code: XmlElem<string | null>;
  desc: XmlElem<string | null>;
}

interface EventDocumentExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
}

interface EventDocumentFile extends FileBase {
  presentation_id: XmlElem<number | null>;
  visibility: XmlElem<string, typeof common.event_file_visibility_types>;
}

interface EventDocumentLibraryMaterial {
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
}

interface EventDocumentLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface EventDocumentRegularScheduleExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number | null>;
}

interface EventDocumentRegularSchedule extends MsWeekScheduleBase {
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  expense_items: XmlMultiElem<EventDocumentRegularScheduleExpenseItem | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_center_type: XmlElem<string>;
  total_cost: XmlElem<number | null>;
  phases_num: XmlElem<number | null>;
}

interface EventDocumentPhaseCollaborator {
  collaborator_id: XmlElem<number | null>;
  is_assist: XmlElem<boolean>;
}

interface EventDocumentPhase {
  id: XmlElem<string | null>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  collaborators: XmlMultiElem<EventDocumentPhaseCollaborator | null>;
}

interface EventDocumentNotificationReminder {
  id: XmlElem<string | null>;
  minutes: XmlElem<number | null>;
  sended: XmlElem<boolean | null>;
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
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  is_model: XmlElem<boolean>;
  is_room: XmlElem<boolean>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  place: XmlElem<string | null>;
  vclass_host: XmlElem<string | null>;
  use_camera_capture: XmlElem<boolean>;
  login_with_camera_only: XmlElem<boolean>;
  capture_rate: XmlElem<number>;
  record_status: XmlElem<string | null>;
  record_exists: XmlElem<boolean>;
  record_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  record_date: XmlElem<Date | null>;
  record_download_count: XmlElem<number | null>;
  record_view_count: XmlElem<number | null>;
  bandwidth: XmlElem<number | null>;
  use_record_camera_capture: XmlElem<boolean>;
  view_with_camera_only: XmlElem<boolean>;
  record_capture_rate: XmlElem<number>;
  current_presentation_id: XmlElem<number | null>;
  webinar_system_id: XmlElem<number | null, WebinarSystemCatalogDocumentTopElem>;
  test: XmlElem<EventDocumentTest | null>;
  record: XmlElem<EventDocumentRecord | null>;
  webinar_settings: XmlMultiElem<EventDocumentWebinarSetting | null>;
  webinar_system_fields: XmlMultiElem<EventDocumentWebinarSystemField | null>;
  use_vclass: XmlElem<boolean>;
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  show_record: XmlElem<boolean>;
  allow_record_download: XmlElem<boolean>;
  use_reserve_server: XmlElem<boolean>;
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  program_id: XmlElem<number | null>;
  create_compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  training_plan_id: XmlElem<number | null, TrainingPlanCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  education_org_type: XmlElem<string | null>;
  education_org_name: XmlElem<string | null>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  chat_id: XmlElem<number | null, ChatCatalogDocumentTopElem>;
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  is_public: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  allow_guest_login: XmlElem<boolean>;
  guest_restrictions: XmlElem<number | null>;
  is_open_case: XmlElem<boolean>;
  public_answers: XmlElem<boolean>;
  duration_plan: XmlElem<number | null>;
  duration_days_plan: XmlElem<number | null>;
  duration_fact: XmlElem<number | null>;
  duration_days_fact: XmlElem<number | null>;
  max_person_num: XmlElem<number | null>;
  min_person_num: XmlElem<number | null>;
  person_num(): number;
  assist_person_num(): number;
  course_finished: XmlElem<number | null>;
  course_process: XmlElem<number | null>;
  course_started: XmlElem<number | null>;
  course_began: XmlElem<number | null>;
  test_finished: XmlElem<number | null>;
  test_process: XmlElem<number | null>;
  test_started: XmlElem<number | null>;
  test_began: XmlElem<number | null>;
  tutor_main: XmlElem<string | null>;
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  organizational_form: XmlElem<string | null, typeof lists.organizational_forms>;
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  event_forms: XmlMultiElem<EventDocumentEventForm | null>;
  stages: XmlMultiElem<EventDocumentStage | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  collaborators: XmlMultiElem<EventDocumentCollaborator | null>;
  group_educ_group_id: XmlElem<string | null>;
  unnamed_person_by_orgs: XmlMultiElem<EventDocumentUnnamedPersonByOrg | null>;
  unnamed_person_num: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
  group_formed: XmlElem<boolean>;
  quota_org: XmlElem<number | null>;
  quota_subdivision: XmlElem<number | null>;
  quota_person: XmlElem<number | null>;
  even_preparations: XmlMultiElem<EventDocumentEvenPreparation | null>;
  hitt: XmlElem<EventDocumentHitt | null>;
  groups: XmlMultiElem<EventDocumentGroup | null>;
  tutors: XmlMultiElem<EventDocumentTutor | null>;
  object_resources: XmlMultiElem<EventDocumentObjectResource | null>;
  total_cost: XmlElem<number | null>;
  total_cost_plan: XmlElem<number | null>;
  contracts: XmlMultiElem<EventDocumentContract | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_center_type: XmlElem<string>;
  default_cost_center_id(): number;
  distribute_cost_type: XmlElem<string>;
  expense_items: XmlMultiElem<EventDocumentExpenseItem | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  files: XmlMultiElem<EventDocumentFile | null>;
  library_materials: XmlMultiElem<EventDocumentLibraryMaterial | null>;
  learning_tasks: XmlMultiElem<EventDocumentLearningTask | null>;
  AddFile(resourceId: number, docResource: unknown): void;
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  use_object_workflow: XmlElem<boolean | null>;
  default_event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  main_material_url: XmlElem<string | null>;
  main_material_width: XmlElem<string | null>;
  main_material_height: XmlElem<string | null>;
  use_video: XmlElem<boolean>;
  video_url: XmlElem<string | null>;
  video_login: XmlElem<string | null>;
  video_password: XmlElem<string | null>;
  use_audio: XmlElem<boolean>;
  audio_url: XmlElem<string | null>;
  audio_channel_login: XmlElem<string | null>;
  audio_channel_password: XmlElem<string | null>;
  audio_login: XmlElem<string | null>;
  audio_password: XmlElem<string | null>;
  date_request_begin: XmlElem<Date | null>;
  date_request_over: XmlElem<Date | null>;
  date_request_rejection_over: XmlElem<Date | null>;
  parent_event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  regular_schedule: XmlElem<EventDocumentRegularSchedule | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_chat_messages(dtLastMessage: Date): unknown;
  send_chat_message(text: string, fullname: string): boolean;
  phases: XmlMultiElem<EventDocumentPhase | null>;
  disp_collaborator_phase_presence: XmlElem<boolean>;
  disp_persons_for_all: XmlElem<boolean | null>;
  has_lector_appraise: XmlElem<boolean | null>;
  has_lector_comp: XmlElem<boolean | null>;
  has_lector_quest: XmlElem<boolean | null>;
  lector_restype: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  lector_date_start: XmlElem<Date | null>;
  has_self_appraise: XmlElem<boolean | null>;
  has_self_comp: XmlElem<boolean | null>;
  has_self_quest: XmlElem<boolean | null>;
  self_restype: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  self_date_start: XmlElem<Date | null>;
  has_manager_appraise: XmlElem<boolean | null>;
  has_manager_comp: XmlElem<boolean | null>;
  has_manager_quest: XmlElem<boolean | null>;
  manager_restype: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  manager_date_start: XmlElem<Date | null>;
  disp_all_assessment_plan: XmlElem<boolean | null>;
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
  notification_reminders: XmlMultiElem<EventDocumentNotificationReminder | null>;
  role_id: XmlMultiElemObject<number | null>;
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
