interface AssessmentResultRecommendView {
  selector?: XmlElem<string>;
}

interface AssessmentResultRecommendTopElem extends XmlTopElem<AssessmentResultRecommendDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<AssessmentResultRecommendView>;
}

type AssessmentResultRecommendDocument = XmlDocument<AssessmentResultRecommendTopElem>;
