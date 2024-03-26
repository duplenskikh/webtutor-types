type SalarySurveyDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SalarySurveyDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  position_level_id: XmlElem<number, PositionLevelCatalogDocumentTopElem>;
  salary_survey_source_id: XmlElem<number, SalarySurveySourceCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  min_salary: XmlElem<number>;
  max_salary: XmlElem<number>;
  avg_salary: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SalarySurveyDocument = XmlDocument & {
  TopElem: SalarySurveyDocumentTopElem;
  salary_survey: SalarySurveyDocumentTopElem;
  DocDesc(): string;
};
