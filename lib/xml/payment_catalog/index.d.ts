type PaymentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.project_status_types>;
  pay_date: XmlElem<Date | null>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  sum: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  payment_type_id: XmlElem<number | null, PaymentTypeCatalogDocumentTopElem>;
  budget_id: XmlElem<number | null, BudgetCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
