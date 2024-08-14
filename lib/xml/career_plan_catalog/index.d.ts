type CareerPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата включения */
  start_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  typical_career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
