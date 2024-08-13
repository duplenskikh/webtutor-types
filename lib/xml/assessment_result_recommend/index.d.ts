type AssessmentResultRecommendDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: AssessmentResultRecommendDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<number | null, typeof common.assessment_appraise_recommend_types>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AssessmentResultRecommendDocument = XmlDocument & {
  TopElem: AssessmentResultRecommendDocumentTopElem;
  assessment_result_recommend: AssessmentResultRecommendDocumentTopElem;
  DocDesc(): string;
};
