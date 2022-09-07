interface RecommenderAlgorithmApplyingDocumentApplyDate {
  date: XmlElem<Date>;
}

type RecommenderAlgorithmApplyingDocumentTopElem = XmlTopElem & { Doc: RecommenderAlgorithmApplyingDocument } & 
PersonFillingBase &
CustomElemsBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  recommender_algorithm_id: XmlElem<number>;
  base_object: XmlElem<ObjectTypeBase>;
  context_object: XmlElem<ObjectTypeBase>;
  count: XmlElem<number>;
  applying_date: XmlElem<Date>;
  apply_dates: XmlMultiElem<RecommenderAlgorithmApplyingDocumentApplyDate>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type RecommenderAlgorithmApplyingDocument = XmlDocument & { TopElem: RecommenderAlgorithmApplyingDocumentTopElem; };
