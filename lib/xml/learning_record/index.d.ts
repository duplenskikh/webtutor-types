interface LearningRecordDocumentMediaRecord {
  id: XmlElem<string | null>;
  media_url: XmlElem<string | null>;
  stream_number: XmlElem<number | null>;
  type_id: XmlElem<string | null>;
}

interface LearningRecordDocumentLog {
  id: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Сотрудник */
  person_fullname: XmlElem<string | null>;
  /** Текст сообщения */
  text: XmlElem<string | null>;
}

interface LearningRecordDocumentResultComment {
  id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Текст сообщения */
  comment: XmlElem<string | null>;
  /** Комментарий */
  result_comment: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
}

interface LearningRecordDocumentViolationInterval {
  /** Время начала */
  start_time: XmlElem<string | null>;
  /** Время окончания */
  finish_time: XmlElem<string | null>;
}

interface LearningRecordDocumentViolation {
  id: XmlElem<string | null>;
  /** Текст сообщения */
  comment: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.violation_types>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.violation_states>;
  stream_number: XmlElem<number | null>;
  media_id: XmlElem<number | null>;
  interval: XmlElem<LearningRecordDocumentViolationInterval | null>;
}

interface LearningRecordDocumentProctor {
  /** Сотрудник */
  proctor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.proctor_states>;
  is_prefer: XmlElem<boolean>;
  last_activity_date: XmlElem<Date | null>;
}

interface LearningRecordDocumentSession {
  id: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.proctoring_session_states>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
}

type LearningRecordDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
MsParametersBase & {
  Doc: LearningRecordDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип объекта */
  proctoring_object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  proctoring_object_id: XmlElem<number | null>;
  /** Название объекта */
  proctoring_object_name: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  is_finish_record: XmlElem<boolean>;
  check_foto_state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  num_failed_checked_foto: XmlElem<number | null>;
  /** Комментарий */
  result_comment: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  proctoring_system_id: XmlElem<number | null, ProctoringSystemCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  download_materials: XmlElem<boolean>;
  record_num: XmlElem<number | null>;
  start_record_date: XmlElem<Date | null>;
  media_records: XmlMultiElem<LearningRecordDocumentMediaRecord | null>;
  logs: XmlMultiElem<LearningRecordDocumentLog | null>;
  result_comments: XmlMultiElem<LearningRecordDocumentResultComment | null>;
  violations: XmlMultiElem<LearningRecordDocumentViolation | null>;
  proctors: XmlMultiElem<LearningRecordDocumentProctor | null>;
  sessions: XmlMultiElem<LearningRecordDocumentSession | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  get_url_record(userTopElem: unknown, proctorId: number): unknown;
};

type LearningRecordDocument = XmlDocument & {
  TopElem: LearningRecordDocumentTopElem;
  learning_record: LearningRecordDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
