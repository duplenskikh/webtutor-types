type CareerPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  typical_career_plan_id: XmlElem<number, CareerPlanCatalogDocumentTopElem>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
