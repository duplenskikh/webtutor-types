type AssessmentAppraiseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_statuses>;
  /** Является эталонной */
  is_model: XmlElem<boolean>;
  /** Просмотр результатов */
  web_display: XmlElem<boolean>;
  /** Объект хранения статуса */
  flag_use_plan: XmlElem<boolean>;
  /** Игнорировать присутствие */
  ignore_presence: XmlElem<boolean | null>;
  /** Публикация результатов */
  external_display_options: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  end_date: XmlElem<Date | null>;
  /** Ответственный */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Оцениваемые */
  is_visible_auditorys: XmlElem<boolean>;
  is_visible_evaluatings: XmlElem<boolean>;
  /** Эксперты */
  is_visible_experts: XmlElem<boolean>;
  /** Способ отображения */
  player: XmlElem<number>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
