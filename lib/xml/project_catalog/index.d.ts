type ProjectCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Договор */
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  /** Тип проекта */
  project_type_id: XmlElem<number | null, ProjectTypeCatalogDocumentTopElem>;
  /** Договор */
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<string | null, typeof common.project_status_types>;
  /** Эталонный проект */
  is_model: XmlElem<boolean>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  plan_labor_costs: XmlElem<number | null>;
  fact_labor_costs: XmlElem<number | null>;
  percent_complete: XmlElem<number | null>;
  team_selected: XmlElem<boolean>;
  /** Планируемая дата начала */
  start_date_plan: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  end_date_plan: XmlElem<Date | null>;
  /** Фактическая дата начала */
  start_date_fact: XmlElem<Date | null>;
  /** Фактическая дата завершения */
  end_date_fact: XmlElem<Date | null>;
  allow_assessment: XmlElem<boolean>;
  /** Вступление в группу */
  join_mode: XmlElem<string | null, typeof common.join_mode_types>;
  /** Тип ресурса базы */
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  all_participant_view_task: XmlElem<boolean>;
  allow_assigning_tasks_to_all: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
