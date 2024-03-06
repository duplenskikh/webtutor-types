interface UserRecommendationDocumentObject extends ObjectTypeBase {
  id: XmlElem<string>;
  comment: XmlElem<string>;
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface UserRecommendationDocumentCalculateDate {
  date: XmlElem<Date>;
}

type UserRecommendationDocumentTopElem = XmlTopElem &
ObjectTypeBase &
CustomElemsBase & {
  Doc: UserRecommendationDocument;
  id: XmlElem<number>;
  objects: XmlMultiElem<UserRecommendationDocumentObject>;
  calculate_dates: XmlMultiElem<UserRecommendationDocumentCalculateDate>;
  context_object: XmlElem<ObjectTypeBase>;
  calc_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type UserRecommendationDocument = XmlDocument & {
  TopElem: UserRecommendationDocumentTopElem;
  user_recommendation: UserRecommendationDocumentTopElem;

};
