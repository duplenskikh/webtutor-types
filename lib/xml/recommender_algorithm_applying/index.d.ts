interface RecommenderAlgorithmApplyingDocumentApplyDate {
  date: XmlElem<Date>;
}

type RecommenderAlgorithmApplyingDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: RecommenderAlgorithmApplyingDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
  base_object: XmlElem<ObjectTypeBase>;
  context_object: XmlElem<ObjectTypeBase>;
  count: XmlElem<number>;
  applying_date: XmlElem<Date>;
  apply_dates: XmlMultiElem<RecommenderAlgorithmApplyingDocumentApplyDate>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RecommenderAlgorithmApplyingDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmApplyingDocumentTopElem;
  recommender_algorithm_applying: RecommenderAlgorithmApplyingDocumentTopElem;

};
