type RecommenderAlgorithmApplyingCatalogDocumentTopElem = XmlTopElem & { Doc: RecommenderAlgorithmApplyingCatalogDocument } & 
PersonFillingBase &
ObjectTypeBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  recommender_algorithm_id: XmlElem<number>;
  context_object_type: XmlElem<string>;
  context_object_id: XmlElem<number>;
  context_object_name: XmlElem<string>;
  count: XmlElem<number>;
  applying_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
}

type RecommenderAlgorithmApplyingCatalogDocument = XmlDocument & { TopElem: RecommenderAlgorithmApplyingCatalogDocumentTopElem; };
