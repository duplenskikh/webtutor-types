type SalarySurveyDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SalarySurveyDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  position_level_id: XmlElem<number | null, PositionLevelCatalogDocumentTopElem>;
  salary_survey_source_id: XmlElem<number | null, SalarySurveySourceCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  min_salary: XmlElem<number | null>;
  max_salary: XmlElem<number | null>;
  avg_salary: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SalarySurveyDocument = XmlDocument & {
  TopElem: SalarySurveyDocumentTopElem;
  salary_survey: SalarySurveyDocumentTopElem;
  DocDesc(): string;
};
