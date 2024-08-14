interface CourseModuleDocumentCmi5 {
  moveon: XmlElem<string | null>;
  launchmode: XmlElem<string | null>;
  launchmethod: XmlElem<string | null>;
}

type CourseModuleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebChecksBase &
KnowledgePartsBase &
CatalogListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CourseModuleDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Внешний ID */
  eid: XmlElem<string | null>;
  /** Тип раздела */
  type: XmlElem<string>;
  /** Максимальный балл */
  max_score: XmlElem<number | null>;
  /** Проходной балл */
  mastery_score: XmlElem<number | null>;
  mastery_score_relative: XmlElem<number | null>;
  url: XmlElem<string | null>;
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Количество попыток */
  attempts_num: XmlElem<number>;
  /** Установка статуса */
  set_status_side: XmlElem<string>;
  /** Ширина окна электронного курса */
  win_width: XmlElem<number | null>;
  /** Высота окна электронного курса */
  win_height: XmlElem<number | null>;
  /** Отображать scrolling */
  disp_scrolling: XmlElem<boolean>;
  version: XmlElem<string | null>;
  import_type: XmlElem<string | null, typeof common.course_import_types>;
  activation_count: XmlElem<number | null>;
  launch_count: XmlElem<number | null>;
  cmi5: XmlElem<CourseModuleDocumentCmi5 | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type CourseModuleDocument = XmlDocument & {
  TopElem: CourseModuleDocumentTopElem;
  course_module: CourseModuleDocumentTopElem;
  DocDesc(): string;
};
