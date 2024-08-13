type SalarySurveySourceDocumentTopElem = XmlTopElem & {
  Doc: SalarySurveySourceDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SalarySurveySourceDocument = XmlDocument & {
  TopElem: SalarySurveySourceDocumentTopElem;
  salary_survey_source: SalarySurveySourceDocumentTopElem;
  DocDesc(): string;
};
