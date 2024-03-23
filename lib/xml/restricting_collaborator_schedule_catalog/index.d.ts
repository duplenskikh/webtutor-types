type RestrictingCollaboratorScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  restriction_type_id: XmlElem<number, RestrictingTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.agreement_status_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
