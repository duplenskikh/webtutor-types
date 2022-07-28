type AssessmentResultRecommendDocumentTopElem = XmlTopElem & { Doc: AssessmentResultRecommendDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type AssessmentResultRecommendDocument = XmlDocument & { TopElem: AssessmentResultRecommendDocumentTopElem; };
