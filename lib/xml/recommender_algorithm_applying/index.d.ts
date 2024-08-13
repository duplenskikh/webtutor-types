interface RecommenderAlgorithmApplyingDocumentApplyDate {
  date: XmlElem<Date | null>;
}

type RecommenderAlgorithmApplyingDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: RecommenderAlgorithmApplyingDocument;
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  base_object: XmlElem<ObjectTypeBase | null>;
  context_object: XmlElem<ObjectTypeBase | null>;
  count: XmlElem<number | null>;
  applying_date: XmlElem<Date | null>;
  apply_dates: XmlMultiElem<RecommenderAlgorithmApplyingDocumentApplyDate | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderAlgorithmApplyingDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmApplyingDocumentTopElem;
  recommender_algorithm_applying: RecommenderAlgorithmApplyingDocumentTopElem;
};
