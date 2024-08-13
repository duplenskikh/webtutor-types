interface CourseDocumentPartActivityState {
  /** Статус учебной активности */
  activity_state_id: XmlElem<number | null, ActivityStateCatalogDocumentTopElem>;
  /** Баллы */
  score: XmlElem<number | null>;
  /** Состояние */
  state_id: XmlElem<number | null, typeof common.learning_states>;
}

interface CourseDocumentPartCompletedParentPart {
  part_code: XmlElem<string | null>;
}

interface CourseDocumentPart {
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип раздела */
  type: XmlElem<string, typeof common.course_part_types>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Проходной балл */
  mastery_score: XmlElem<number | null>;
  mastery_score_relative: XmlElem<number | null>;
  url: XmlElem<string | null>;
  /** Учебный модуль */
  course_module_id: XmlElem<number | null, CourseModuleCatalogDocumentTopElem>;
  /** Родительский раздел */
  parent_part_code: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Ширина */
  win_width: XmlElem<number | null>;
  /** Высота */
  win_height: XmlElem<number | null>;
  /** Отображать scrolling */
  disp_scrolling: XmlElem<boolean>;
  /** Возможно изменять размер */
  resizable: XmlElem<boolean>;
  /** Обязательный раздел */
  is_mandatory: XmlElem<boolean>;
  /** Видимый раздел */
  is_visible: XmlElem<boolean>;
  /** Максимальное время на модуль */
  max_time_allowed: XmlElem<string | null>;
  /** Действие по наступлению лимита времени */
  time_limit_action: XmlElem<string | null>;
  /** Установка статуса */
  set_status_side: XmlElem<string>;
  /** Коэффициент итоговой оценки */
  score_factor: XmlElem<number>;
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Количество попыток */
  attempts_num: XmlElem<number>;
  /** День планируемого начала обучения */
  start_day: XmlElem<number | null>;
  /** Планируемая продолжительность обучения в днях */
  duration_day: XmlElem<number | null>;
  /** Учебная активность */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_states: XmlMultiElem<CourseDocumentPartActivityState | null>;
  object_id: XmlElem<number | null>;
  cl_module_view: XmlElem<string | null>;
  /** Доступ после завершения разделов */
  completed_parent_parts: XmlMultiElem<CourseDocumentPartCompletedParentPart | null>;
  view: XmlElem<ViewConditionsBase | null>;
  launch: XmlElem<ViewConditionsBase | null>;
  cl_module_protocol: XmlElem<string | null>;
}

type CourseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
EstimationLevelsBase &
CourseExpertsBase &
CourseSettingsBase &
CatalogListBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
ProctoringBase &
GameBonusBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CourseDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  status: XmlElem<string, typeof common.course_test_states>;
  /** Ширина окна электронного курса */
  win_width: XmlElem<number | null>;
  /** Высота окна электронного курса */
  win_height: XmlElem<number | null>;
  disp_scrolling: XmlElem<boolean>;
  /** Возможно изменять размер */
  resizable: XmlElem<boolean>;
  struct_type: XmlElem<string>;
  /** Ссылка на файл библиотеки функций */
  library_url: XmlElem<string | null>;
  /** Разделы электронного курса */
  parts: XmlMultiElem<CourseDocumentPart | null>;
  course_finish_redirect: XmlElem<string>;
  course_finish_redirect_url: XmlElem<string | null>;
  /** Базовый url */
  base_url: XmlElem<string | null>;
  view_type: XmlElem<string>;
  /** Проходной балл */
  mastery_score: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number>;
  /** Способ расчета итоговой оценки */
  score_sum_type: XmlElem<string>;
  /** Формула итоговой оценки */
  score_sum_eval: XmlElem<string>;
  /** Разрешить самостоятельное назначение курса */
  yourself_start: XmlElem<boolean>;
  /** Разрешить завершать курс, если не все главы пройдены или не набран проходной балл */
  finish_without_mastery_score: XmlElem<boolean>;
  /** Завершать курс, если пройдены все главы курса или набран проходной балл */
  auto_finish: XmlElem<boolean>;
  /** Не использовать локальное расположение данного курса */
  ignor_location: XmlElem<boolean>;
  /** Возможен запуск завершенного курса без сохранения новых результатов */
  start_after_finish: XmlElem<boolean>;
  /** Не передавать в адресе запускаемого модуля информацию */
  no_url_info: XmlElem<boolean>;
  /** Открывать описание раздела с типом папка */
  disp_folder_desc: XmlElem<boolean>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  /** Не кодировать данные модулей при запуска курса */
  no_encoding_core_lesson: XmlElem<boolean | null>;
  /** Не отправлять стандартные уведомления о назначении */
  not_use_default_notification: XmlElem<boolean | null>;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Обязательное заполнение отзыва */
  mandatory_fill_response: XmlElem<boolean>;
  /** Отображать отзывы */
  allow_disp_response: XmlElem<boolean>;
  /** Электронный курс */
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  version: XmlElem<string | null>;
  /** Стоимость записи на электронный курс */
  price: XmlElem<number | null>;
  /** Доступный для Personal WebSoft HCM */
  pwt_disp: XmlElem<boolean>;
  import_type: XmlElem<string | null>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Расписание прохождения */
  schedule: XmlElem<MsWeekScheduleBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  get_part_code(): string;
  Width(code: string): number;
  Height(code: string): number;
  DispScrolling(code: unknown): boolean;
  Resizable(code: unknown): boolean;
  get_workflow_id(): null;
  get_pwt_info(source: unknown): string;
  GetPartUrl(code: unknown, index: unknown): string;
  get_info(): null | Object;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type CourseDocument = XmlDocument & {
  TopElem: CourseDocumentTopElem;
  course: CourseDocumentTopElem;
  DocDesc(): string;
};
