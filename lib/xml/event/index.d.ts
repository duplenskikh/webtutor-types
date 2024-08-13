interface EventDocumentTest {
  class: XmlElem<unknown | null>;
  /** Текущий тест */
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
  /** Название */
  name: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /** Доступен */
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
  /** Количество неименованных участников */
  unnamed_person_num: XmlElem<number | null>;
  /** Ответственный */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
}

interface EventDocumentEvenPreparation {
  even_preparation_id: XmlElem<string | null>;
  /** Ответственный за выполнение */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО ответственного */
  person_fullname: XmlElem<string | null>;
  /** Плановая дата */
  plan_date: XmlElem<Date | null>;
  /** Фактическая дата */
  fact_date: XmlElem<Date | null>;
  /** Статус */
  status_id: XmlElem<string, typeof common.event_status_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Комментарий ответственного */
  comment_person: XmlElem<string | null>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
}

interface EventDocumentHitt {
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Пульт руководителя */
  tutor_controller_code: XmlElem<string | null>;
  /** Инструкция */
  instruction: XmlElem<string | null>;
  /** Автопереход на следующий вопрос при ответе всех тестируемых */
  auto_next_all_answer: XmlElem<boolean>;
  /** Автоматически завершать тесты после завершения тестирования */
  auto_finish_test: XmlElem<boolean>;
  /** Использовать уже активированные тесты для записи результатов */
  use_activated_test: XmlElem<boolean>;
  /** Номер COM порта */
  port_num: XmlElem<number | null>;
  /** Количество колонок */
  column_num: XmlElem<number>;
  /** Размер шрифта */
  font_size: XmlElem<number>;
}

interface EventDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface EventDocumentTutor extends PersonFillingBase {
  /** Ответственный за проведение */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  telephone_out: XmlElem<string | null>;
  telephone_in: XmlElem<string | null>;
  /** Является основным */
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string | null>;
  participation_id: XmlElem<string | null>;
}

interface EventDocumentObjectResource {
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
}

interface EventDocumentContract extends CostCurrencyBase {
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Название юридического лица */
  legal_entity_name: XmlElem<string | null>;
  /** Юридическое лицо из списка */
  legal_entity_code: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
}

interface EventDocumentExpenseItem {
  /** Статья затрат */
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  /** Сумма */
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
  /** Сумма */
  sum: XmlElem<number | null>;
}

interface EventDocumentRegularSchedule extends MsWeekScheduleBase {
  /** Период с */
  start_date: XmlElem<Date | null>;
  /** Период по */
  finish_date: XmlElem<Date | null>;
  /** Статьи затрат */
  expense_items: XmlMultiElem<EventDocumentRegularScheduleExpenseItem | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_center_type: XmlElem<string>;
  /** Общая стоимость всех этапов */
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
  /** Тип */
  type_id: XmlElem<string, typeof common.event_types>;
  /** Тип */
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Эталонное мероприятие */
  is_model: XmlElem<boolean>;
  is_room: XmlElem<boolean>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Место проведения */
  place: XmlElem<string | null>;
  /** Сервер Виртуального класса */
  vclass_host: XmlElem<string | null>;
  use_camera_capture: XmlElem<boolean>;
  login_with_camera_only: XmlElem<boolean>;
  capture_rate: XmlElem<number>;
  /** Статус записи */
  record_status: XmlElem<string | null>;
  /** Вебинар не записан */
  record_exists: XmlElem<boolean>;
  record_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата записи */
  record_date: XmlElem<Date | null>;
  /** Количество скачиваний */
  record_download_count: XmlElem<number | null>;
  /** Количество просмотров */
  record_view_count: XmlElem<number | null>;
  /** Ширина канала для видео */
  bandwidth: XmlElem<number | null>;
  /** Делать снимки с камеры во время просмотра записи */
  use_record_camera_capture: XmlElem<boolean>;
  /** Разрешить просмотр записи только при наличии веб-камеры */
  view_with_camera_only: XmlElem<boolean>;
  record_capture_rate: XmlElem<number>;
  /** Текущая презентация */
  current_presentation_id: XmlElem<number | null>;
  /** Система вебинаров */
  webinar_system_id: XmlElem<number | null, WebinarSystemCatalogDocumentTopElem>;
  test: XmlElem<EventDocumentTest | null>;
  record: XmlElem<EventDocumentRecord | null>;
  webinar_settings: XmlMultiElem<EventDocumentWebinarSetting | null>;
  webinar_system_fields: XmlMultiElem<EventDocumentWebinarSystemField | null>;
  use_vclass: XmlElem<boolean>;
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  /** Запись доступна для просмотра */
  show_record: XmlElem<boolean>;
  allow_record_download: XmlElem<boolean>;
  /** Использовать резервный сервер */
  use_reserve_server: XmlElem<boolean>;
  /** Модульная программа */
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  /** Набор программ */
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Использовать резервный сервер */
  program_id: XmlElem<number | null>;
  create_compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  training_plan_id: XmlElem<number | null, TrainingPlanCatalogDocumentTopElem>;
  /** Организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  education_org_type: XmlElem<string | null>;
  /** Название организации */
  education_org_name: XmlElem<string | null>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Чат */
  chat_id: XmlElem<number | null, ChatCatalogDocumentTopElem>;
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /** Статус */
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  /** Публичное мероприятие */
  is_public: XmlElem<boolean>;
  /** Открытое мероприятие */
  is_open: XmlElem<boolean>;
  allow_guest_login: XmlElem<boolean>;
  guest_restrictions: XmlElem<number | null>;
  is_open_case: XmlElem<boolean>;
  public_answers: XmlElem<boolean>;
  /** Планируемое количество часов */
  duration_plan: XmlElem<number | null>;
  /** Планируемое количество дней */
  duration_days_plan: XmlElem<number | null>;
  /** Фактическое количество часов */
  duration_fact: XmlElem<number | null>;
  /** Фактическое количество дней */
  duration_days_fact: XmlElem<number | null>;
  /** Максимальное количество участников */
  max_person_num: XmlElem<number | null>;
  /** Минимальное количество участников */
  min_person_num: XmlElem<number | null>;
  person_num(): number;
  assist_person_num(): number;
  /** Завершенных курсов */
  course_finished: XmlElem<number | null>;
  /** Активных курсов */
  course_process: XmlElem<number | null>;
  /** Неначатых курсов */
  course_started: XmlElem<number | null>;
  /** Начатых курсов */
  course_began: XmlElem<number | null>;
  /** Завершенных тестов */
  test_finished: XmlElem<number | null>;
  /** Активных тестов */
  test_process: XmlElem<number | null>;
  /** Неначатых тестов */
  test_started: XmlElem<number | null>;
  /** Начатых тестов */
  test_began: XmlElem<number | null>;
  /** Ответственный */
  tutor_main: XmlElem<string | null>;
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  /** Организационная форма */
  organizational_form: XmlElem<string | null, typeof lists.organizational_forms>;
  /** Форма проведения */
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  /** Формы проведения */
  event_forms: XmlMultiElem<EventDocumentEventForm | null>;
  /** Этапы */
  stages: XmlMultiElem<EventDocumentStage | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Сотрудники */
  collaborators: XmlMultiElem<EventDocumentCollaborator | null>;
  /** Группа обучения */
  group_educ_group_id: XmlElem<string | null>;
  /** Неименованные участники по организациям */
  unnamed_person_by_orgs: XmlMultiElem<EventDocumentUnnamedPersonByOrg | null>;
  /** Количество неименованных участников */
  unnamed_person_num: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
  /** Группа сформирована */
  group_formed: XmlElem<boolean>;
  /** Квота на организацию */
  quota_org: XmlElem<number | null>;
  /** Квота на подразделение */
  quota_subdivision: XmlElem<number | null>;
  /** Квота на заявителя */
  quota_person: XmlElem<number | null>;
  /** Подготовка мероприятия */
  even_preparations: XmlMultiElem<EventDocumentEvenPreparation | null>;
  /** Тестирование с ДУ */
  hitt: XmlElem<EventDocumentHitt | null>;
  /** Группы */
  groups: XmlMultiElem<EventDocumentGroup | null>;
  /** Ответственные за проведение */
  tutors: XmlMultiElem<EventDocumentTutor | null>;
  /** Оборудование */
  object_resources: XmlMultiElem<EventDocumentObjectResource | null>;
  /** Общая стоимость */
  total_cost: XmlElem<number | null>;
  /** Планируемая общая стоимость */
  total_cost_plan: XmlElem<number | null>;
  /** Договоры */
  contracts: XmlMultiElem<EventDocumentContract | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_center_type: XmlElem<string>;
  default_cost_center_id(): number;
  /** Распределение общей стоимости */
  distribute_cost_type: XmlElem<string>;
  /** Статьи затрат */
  expense_items: XmlMultiElem<EventDocumentExpenseItem | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  files: XmlMultiElem<EventDocumentFile | null>;
  library_materials: XmlMultiElem<EventDocumentLibraryMaterial | null>;
  learning_tasks: XmlMultiElem<EventDocumentLearningTask | null>;
  AddFile(resourceId: number, docResource: unknown): void;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Обязательное заполнение отзыва */
  mandatory_fill_response: XmlElem<boolean>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Использовать документооборот учебной программы */
  use_object_workflow: XmlElem<boolean | null>;
  /** Тип результата по умолчанию */
  default_event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  /** Основной материал */
  main_material_url: XmlElem<string | null>;
  /** Ширина */
  main_material_width: XmlElem<string | null>;
  /** Высота */
  main_material_height: XmlElem<string | null>;
  /** Показывать видео */
  use_video: XmlElem<boolean>;
  /** Путь к видео */
  video_url: XmlElem<string | null>;
  /** Логин */
  video_login: XmlElem<string | null>;
  /** Пароль */
  video_password: XmlElem<string | null>;
  /** Показывать аудио */
  use_audio: XmlElem<boolean>;
  /** Путь к аудио */
  audio_url: XmlElem<string | null>;
  /** Название аудио канала */
  audio_channel_login: XmlElem<string | null>;
  /** Пароль аудио канала */
  audio_channel_password: XmlElem<string | null>;
  /** Логин пользователя аудио канала */
  audio_login: XmlElem<string | null>;
  /** Пароль пользователя аудио канала */
  audio_password: XmlElem<string | null>;
  /** Дата начала подачи заявок */
  date_request_begin: XmlElem<Date | null>;
  /** Дата окончания подачи заявок */
  date_request_over: XmlElem<Date | null>;
  /** Дата окончания возможности отмены участия */
  date_request_rejection_over: XmlElem<Date | null>;
  parent_event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Расписание */
  regular_schedule: XmlElem<EventDocumentRegularSchedule | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
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
  /** Категория */
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
