type EfficiencyGradeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  assessment_source: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  successor_id: XmlElem<number, SuccessorCatalogDocumentTopElem>;
  personnel_reserve_id: XmlElem<number, PersonnelReserveCatalogDocumentTopElem>;
  assessor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  assessment_date: XmlElem<Date>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
