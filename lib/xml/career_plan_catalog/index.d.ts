type CareerPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  typical_career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
