type BudgetPeriodCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  period_type: XmlElem<string, typeof common.perioditys>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
