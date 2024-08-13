type SuccessorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  key_position_id: XmlElem<number | null, KeyPositionCatalogDocumentTopElem>;
  key_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  key_person_fullname: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  readiness_level_id: XmlElem<number | null, ReadinessLevelCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.successor_status_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
