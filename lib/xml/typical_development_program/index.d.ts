interface TypicalDevelopmentProgramDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTask extends CustomElemsBase {
  id: XmlElem<string | null>;
  /** Позиция */
  position: XmlElem<number>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  due_date: XmlElem<number | null>;
  start_edit_days: XmlElem<number | null>;
  /** Родительская задача */
  parent_task_id: XmlElem<string | null>;
  /** Продолжительность (дн.) */
  duration_days: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Автоматическое назначение */
  auto_appoint_learning: XmlElem<boolean | null>;
  /** Автоматическое назначение */
  auto_appoint_task: XmlElem<boolean | null>;
  /** Автоматическое назначение */
  auto_appoint_appraise: XmlElem<boolean | null>;
  add_exist_appraise: XmlElem<boolean | null>;
  /** Автоматическое назначение */
  auto_appoint_poll: XmlElem<boolean | null>;
  type_document: XmlElem<string | null, typeof common.career_reserve_material_types>;
  /** Ссылка на документ */
  link_document: XmlElem<string | null>;
  /** Запретить редактирование задачи на портале */
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<TypicalDevelopmentProgramDocumentTaskCommissionPerson | null>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySubTutor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySub {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  flag_expanded: XmlElem<boolean>;
  tutors: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySubTutor | null>;
}

type TypicalDevelopmentProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: TypicalDevelopmentProgramDocument;
  /** Статус */
  status: XmlElem<string | null, typeof common.typical_development_program_statuss>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Задания */
  tasks: XmlMultiElem<TypicalDevelopmentProgramDocumentTask | null>;
  tutors_by_subs: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySub | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  calc_position(task: unknown): void;
  filling_empty_position_field(): void;
};

type TypicalDevelopmentProgramDocument = XmlDocument & {
  TopElem: TypicalDevelopmentProgramDocumentTopElem;
  typical_development_program: TypicalDevelopmentProgramDocumentTopElem;
  DocDesc(): string;
};
