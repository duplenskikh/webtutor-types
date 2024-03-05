type SalarySurveyCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  min_salary: XmlElem<number>;
  max_salary: XmlElem<number>;
  avg_salary: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  position_level_id: XmlElem<number, PositionLevelCatalogDocumentTopElem>;
  salary_survey_source_id: XmlElem<number, SalarySurveySourceCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
