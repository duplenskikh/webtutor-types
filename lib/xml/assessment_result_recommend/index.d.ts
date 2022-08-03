type AssessmentResultRecommendDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: AssessmentResultRecommendDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type AssessmentResultRecommendDocument = XmlDocument & {
  TopElem: AssessmentResultRecommendDocumentTopElem;
};
