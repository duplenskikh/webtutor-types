interface TestProjectDocumentExpert extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  item_count: XmlElem<number | null>;
}

interface TestProjectDocumentGroupPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_master: XmlElem<boolean>;
}

interface TestProjectDocumentGroup {
  id: XmlElem<string | null>;
  /** Название группы */
  name: XmlElem<string | null>;
  /** Тестируемые */
  persons: XmlMultiElem<TestProjectDocumentGroupPerson | null>;
}

interface TestProjectDocumentPurpose {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Родительская цель */
  parent_id: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number | null>;
  /** Необходимое количество вопросов */
  item_count: XmlElem<number | null>;
  /** Показывать вопросы цели */
  _expanded: XmlElem<boolean | null>;
}

interface TestProjectDocumentItem {
  id: XmlElem<number | null>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Текст вопроса */
  question_text: XmlElem<string | null>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.item_types>;
  question_points: XmlElem<number>;
  /** Дата добавления */
  create_date: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string, typeof common.item_status_types>;
  /** Требуемый процент верно ответивших */
  quota_correct: XmlElem<number | null>;
  /** Требуемое количество статусов "Принят" */
  quota_approved: XmlElem<number | null>;
  /** Требуемое количество статусов "Отклонен" */
  quota_rejected: XmlElem<number | null>;
  /** Автор */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО автора */
  person_fullname: XmlElem<string | null>;
  /** Цель */
  purpose_id: XmlElem<string | null>;
}

interface TestProjectDocumentItemComment {
  id: XmlElem<string | null>;
  /** Эксперт */
  person_id: XmlElem<number | null>;
  /** ФИО эксперта */
  person_fullname(): string;
  /** Вопрос */
  item_id: XmlElem<number | null>;
  /** Процент верных */
  quota_correct: XmlElem<number | null>;
  /** Статус */
  status: XmlElem<string, typeof common.item_status_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

interface TestProjectDocumentVariant {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.test_project_types>;
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<string | null>;
  /** Проходной балл по Ангофу */
  angof_avg: XmlElem<number | null>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
}

interface TestProjectDocumentReportPhi {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
}

interface TestProjectDocumentReportDx {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
}

interface TestProjectDocumentReportPercent {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
}

interface TestProjectDocumentReportQuestionVariant {
  ident: XmlElem<string | null>;
  correct: XmlElem<string | null>;
  cor_value: XmlElem<string | null>;
  value: XmlElem<string | null>;
  text: XmlElem<string | null>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  cor_text: XmlElem<string | null>;
  ws_score: XmlElem<string | null>;
  cond: XmlMultiElemObject<string | null>;
}

interface TestProjectDocumentReportQuestion {
  ident: XmlElem<string | null>;
  text: XmlElem<string | null>;
  qtype: XmlElem<string | null, typeof common.annals_item_types>;
  maxweight: XmlElem<string | null>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  phi: XmlElem<number | null>;
  dx: XmlElem<number | null>;
  state: XmlElem<string | null, typeof common.annals_states>;
  variants: XmlMultiElem<TestProjectDocumentReportQuestionVariant | null>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
  section_id: XmlElem<string | null>;
  section_name: XmlElem<string | null>;
}

interface TestProjectDocumentReportLinesLinePoint {
  elem: XmlElem<number | null>;
  value: XmlElem<number | null>;
  tip_text: XmlElem<string | null>;
}

interface TestProjectDocumentReportLinesLine {
  name: XmlElem<string | null>;
  color: XmlElem<string | null>;
  weight: XmlElem<number | null>;
  points: XmlMultiElem<TestProjectDocumentReportLinesLinePoint | null>;
}

interface TestProjectDocumentReportLinesVLine {
  name: XmlElem<string | null>;
  elem: XmlElem<number | null>;
  color: XmlElem<string | null>;
  weight: XmlElem<number | null>;
}

interface TestProjectDocumentReportLines {
  title: XmlElem<string | null>;
  x_name: XmlElem<string | null>;
  y_name: XmlElem<string | null>;
  x_step: XmlElem<number | null>;
  line: XmlElem<TestProjectDocumentReportLinesLine | null>;
  v_line: XmlElem<TestProjectDocumentReportLinesVLine | null>;
}

interface TestProjectDocumentReportVariant {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  assessment_name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  status: XmlElem<string | null, typeof common.test_project_types>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  phi: XmlElem<number | null>;
  dx: XmlElem<number | null>;
  avg_score: XmlElem<number | null>;
  avg: XmlElem<number | null>;
  min_score: XmlElem<number | null>;
  min: XmlElem<number | null>;
  max_score: XmlElem<number | null>;
  max: XmlElem<number | null>;
}

interface TestProjectDocumentReport {
  variant_id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sort_type_id: XmlElem<string>;
  disp_answers: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  x_step: XmlElem<number | null>;
  phi: XmlElem<TestProjectDocumentReportPhi | null>;
  dx: XmlElem<TestProjectDocumentReportDx | null>;
  percent: XmlElem<TestProjectDocumentReportPercent | null>;
  questions: XmlMultiElem<TestProjectDocumentReportQuestion | null>;
  lines: XmlElem<TestProjectDocumentReportLines | null>;
  variants: XmlMultiElem<TestProjectDocumentReportVariant | null>;
}

type TestProjectDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TestProjectDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.test_project_types>;
  /** Эксперты */
  experts: XmlMultiElem<TestProjectDocumentExpert | null>;
  /** Группы */
  groups: XmlMultiElem<TestProjectDocumentGroup | null>;
  /** Цели теста */
  purposes: XmlMultiElem<TestProjectDocumentPurpose | null>;
  /** Вопросы */
  items: XmlMultiElem<TestProjectDocumentItem | null>;
  /** Комментарии экспертов */
  item_comments: XmlMultiElem<TestProjectDocumentItemComment | null>;
  /** Варианты тестов */
  variants: XmlMultiElem<TestProjectDocumentVariant | null>;
  /** Требуемый процент верно ответивших */
  default_quota_correct: XmlElem<number>;
  /** Требуемое количество статусов Принят */
  default_quota_approved: XmlElem<number>;
  /** Требуемое количество статусов Отклонен */
  default_quota_rejected: XmlElem<number>;
  variant_counter: XmlElem<number>;
  get_variant_counter(): unknown;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  report: XmlElem<TestProjectDocumentReport | null>;
  get_angof_avg(variantId: number, itemsSource: unknown): unknown;
  pul_list_file(): unknown;
  set_assessment_status(assessmentId: number, status: unknown): unknown;
};

type TestProjectDocument = XmlDocument & {
  TopElem: TestProjectDocumentTopElem;
  test_project: TestProjectDocumentTopElem;
  DocDesc(): string;
};
