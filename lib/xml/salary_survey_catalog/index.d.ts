type SalarySurveyCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  min_salary: XmlElem<number | null>;
  max_salary: XmlElem<number | null>;
  avg_salary: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  position_level_id: XmlElem<number | null, PositionLevelCatalogDocumentTopElem>;
  salary_survey_source_id: XmlElem<number | null, SalarySurveySourceCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
