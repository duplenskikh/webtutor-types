interface TaskDocumentExpert {
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TaskDocumentPreparation {
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_plan: XmlElem<number | null>;
  role_id: XmlElem<string | null>;
}

interface TaskDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  is_main: XmlElem<boolean | null>;
}

interface TaskDocumentCustomField {
  /** Название */
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface TaskDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

interface TaskDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

interface TaskDocumentHistory {
  /** Статус */
  status: XmlElem<string | null>;
  custom_state_id: XmlElem<string | null>;
}

type TaskDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TaskDocument;
  /** Тип */
  task_type_id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
  /** Родительская задача */
  parent_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  /** Источник транслирования */
  translated_task_id: XmlElem<number | null, TaskCatalogDocumentTopElem>;
  /** Тип получателя трансляции */
  translated_target_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Получатель трансляции */
  translated_target_id: XmlElem<number | null>;
  /** Назначивший задачу */
  assigner_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип ответственного */
  executor_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Ответственный за исполнение задачи */
  executor_id: XmlElem<number | null>;
  executor_plan: XmlElem<number | null>;
  experts: XmlMultiElem<TaskDocumentExpert | null>;
  preparations: XmlMultiElem<TaskDocumentPreparation | null>;
  /** Тип объекта-источника */
  source_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект-источник */
  source_object_id: XmlElem<number | null>;
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  /** Тип объекта цели */
  target_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект цели */
  target_object_id: XmlElem<number | null>;
  /** Тип фактического объекта */
  fact_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Фактический объект */
  fact_object_id: XmlElem<number | null>;
  date_period_type: XmlElem<string | null, typeof common.perioditys>;
  /** Фактическая дата начала */
  date_plan: XmlElem<Date | null>;
  /** Фактическая дата завершения */
  date_fact: XmlElem<Date | null>;
  plan_labor_costs: XmlElem<number | null>;
  fact_labor_costs: XmlElem<number | null>;
  /** Бюджетный период */
  plan_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Бюджетный период */
  fact_budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  priority: XmlElem<number | null>;
  /** Планируемая дата начала */
  start_date_plan: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  end_date_plan: XmlElem<Date | null>;
  delayed_start: XmlElem<number | null>;
  plan_duraion: XmlElem<number | null>;
  plan: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  fact: XmlElem<string | null>;
  fact_value: XmlElem<number | null>;
  custom_state_id: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.task_statuses>;
  /** Оценка */
  value: XmlElem<number | null>;
  /** Процент готовности */
  readiness_percent: XmlElem<number | null>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  workflow_matchings: XmlMultiElem<TaskDocumentWorkflowMatching | null>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  custom_fields: XmlMultiElem<TaskDocumentCustomField | null>;
  files: XmlMultiElem<TaskDocumentFile | null>;
  AddFile(fileId: number): void;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  custom_comments: XmlMultiElem<TaskDocumentCustomComment | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  history: XmlElem<TaskDocumentHistory | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type TaskDocument = XmlDocument & {
  TopElem: TaskDocumentTopElem;
  task: TaskDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
