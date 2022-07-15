interface RecommenderAlgorithmApplyingApplyDate {
  date?: XmlElem<Date>;
}

interface RecommenderAlgorithmApplyingBaseObject extends ObjectTypeBase {
}

interface RecommenderAlgorithmApplyingContextObject extends ObjectTypeBase {
}

interface RecommenderAlgorithmApplyingTopElem extends XmlTopElem<RecommenderAlgorithmApplyingDocument>, PersonFillingBase, CustomElemsBase {
  id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  recommender_algorithm_id?: XmlElem<number>;
  count?: XmlElem<number>;
  applying_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  apply_dates?: XmlMultiElem<RecommenderAlgorithmApplyingApplyDate>;
  base_object?: XmlElem<RecommenderAlgorithmApplyingBaseObject>;
  context_object?: XmlElem<RecommenderAlgorithmApplyingContextObject>;
}

type RecommenderAlgorithmApplyingDocument = XmlDocument<RecommenderAlgorithmApplyingTopElem>;
