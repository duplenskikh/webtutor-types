type LearningRecordCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Тип объекта */
  proctoring_object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  proctoring_object_id: XmlElem<number | null>;
  /** Название объекта */
  proctoring_object_name: XmlElem<string | null>;
  proctoring_system_id: XmlElem<number | null, ProctoringSystemCatalogDocumentTopElem>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО пользователя */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Должность */
  person_subdivision_name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  is_finish_record: XmlElem<boolean>;
  num_failed_checked_foto: XmlElem<number | null>;
  check_foto_state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  download_materials: XmlElem<boolean>;
  active_session_id: XmlElem<string | null>;
  /** Дата завершения */
  active_session_finish_date: XmlElem<Date | null>;
  proctors_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  archive_proctors_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  is_prefer_proctor: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
