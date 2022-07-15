interface SalarySurveySourceView extends DescBase {
}

interface SalarySurveySourceTopElem extends XmlTopElem<SalarySurveySourceDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<SalarySurveySourceView>;
}

type SalarySurveySourceDocument = XmlDocument<SalarySurveySourceTopElem>;
