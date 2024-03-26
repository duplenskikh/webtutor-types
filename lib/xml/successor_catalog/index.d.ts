type SuccessorCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  key_position_id: XmlElem<number, KeyPositionCatalogDocumentTopElem>;
  key_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  key_person_fullname: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  readiness_level_id: XmlElem<number, ReadinessLevelCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.successor_status_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
