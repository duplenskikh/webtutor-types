type IntervalScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  /** Состояние */
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Текущий этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  workflow_type: XmlElem<string | null>;
  change_start_date: XmlElem<Date | null>;
  change_finish_date: XmlElem<Date | null>;
  /** Сотрудник */
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
