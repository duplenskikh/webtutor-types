type RestrictingCollaboratorScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  restriction_type_id: XmlElem<number | null, RestrictingTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
