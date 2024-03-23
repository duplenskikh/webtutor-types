type AccountCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  balance: XmlElem<number>;
  status: XmlElem<string, typeof common.account_status_types>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
