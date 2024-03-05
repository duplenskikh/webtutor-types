type SalarySurveySourceDocumentTopElem = XmlTopElem & {
  Doc: SalarySurveySourceDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SalarySurveySourceDocument = XmlDocument & {
  TopElem: SalarySurveySourceDocumentTopElem;
};
