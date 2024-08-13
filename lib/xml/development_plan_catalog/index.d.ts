type DevelopmentPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Оценочная процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Планы оценки */
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  /** Оцениваемый сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оцениваемого */
  person_fullname: XmlElem<string | null>;
  /** Должность оцениваемого */
  person_position_name: XmlElem<string | null>;
  /** Должность оцениваемого */
  person_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Подразделение */
  person_position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Оценивающий сотрудник */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО оценивающего */
  expert_person_fullname: XmlElem<string | null>;
  /** Должность оценивающего */
  expert_person_position_name: XmlElem<string | null>;
  /** Должность */
  expert_person_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  /** Подразделение */
  expert_person_position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  /** Согласующие эксперты */
  custom_experts: XmlElem<string | null>;
  /** Согласующие эксперты */
  custom_experts_array: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Согласующие эксперты */
  is_custom_experts: XmlElem<boolean>;
  /** План сотрудника/подразделения */
  flag_appraise_department: XmlElem<boolean>;
  /** Статус */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Тип оценки */
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  /** Признак завершенности */
  is_done: XmlElem<boolean>;
  /** Признак готовности (для параллельной оценки) */
  is_ready: XmlElem<boolean>;
  /** Признак результирующей формы */
  is_final: XmlElem<boolean>;
  /** Задействовался/не задействовался */
  flag_is_processed: XmlElem<boolean>;
  /** Документооборот */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Этап документооборота */
  workflow_state: XmlElem<string | null>;
  /** Название текущего этапа документооборота */
  workflow_state_name: XmlElem<string | null>;
  /** Дата завершения */
  workflow_state_last_date: XmlElem<Date | null>;
  /** ДО инициализирован */
  is_workflow_init: XmlElem<boolean | null>;
  /** Карьерный резерв */
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  /** Дата последнего сохранения */
  appraise_date: XmlElem<Date | null>;
  /** Порядковый номер */
  index: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
