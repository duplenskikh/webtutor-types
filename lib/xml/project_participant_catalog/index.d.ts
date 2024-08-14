type ProjectParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип участника проекта */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_roles_id: XmlMultiElemObject<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  plan_load: XmlElem<number | null>;
  percent_plan_load: XmlElem<number | null>;
  /** Состояние */
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Текущий этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Сотрудник */
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
