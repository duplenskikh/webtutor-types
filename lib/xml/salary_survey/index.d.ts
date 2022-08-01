type SalarySurveyDocumentTopElem = XmlTopElem & { Doc: SalarySurveyDocument } & 
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  position_common_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_level_id?: XmlElem<number>;
  salary_survey_source_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  min_salary?: XmlElem<number>;
  max_salary?: XmlElem<number>;
  avg_salary?: XmlElem<number>;
  currency?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type SalarySurveyDocument = XmlDocument & { TopElem: SalarySurveyDocumentTopElem; };
