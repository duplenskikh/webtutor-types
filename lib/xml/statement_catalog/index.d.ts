type StatementCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  create_ticks: XmlElem<number | null>;
  timestamp: XmlElem<Date | null>;
  statement_ref_id: XmlElem<string | null>;
  voided: XmlElem<boolean>;
  processed: XmlElem<boolean | null>;
  /** Хранилище учебных записей */
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Тип учебной активности */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  /** Тип учебной активности */
  activity_code: XmlElem<string | null>;
  /** Статус */
  verb_id: XmlElem<string | null>;
  /** Статус */
  verb_name: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  registration: XmlElem<string | null>;
  context_registration: XmlElem<string | null>;
  context_instructor: XmlElem<string | null>;
  context_team: XmlElem<string | null>;
  context_revision: XmlElem<string | null>;
  context_platform: XmlElem<string | null>;
  context_language: XmlElem<string | null>;
  context_statement: XmlElem<string | null>;
  result_score_max: XmlElem<number | null>;
  result_score_min: XmlElem<number | null>;
  result_score_raw: XmlElem<number | null>;
  result_score_scaled: XmlElem<number | null>;
  result_success: XmlElem<boolean | null>;
  result_completion: XmlElem<boolean | null>;
  result_response: XmlElem<string | null>;
  result_duration: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
