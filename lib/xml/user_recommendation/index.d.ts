interface UserRecommendationDocumentObject extends ObjectTypeBase {
  id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
}

interface UserRecommendationDocumentCalculateDate {
  date: XmlElem<Date | null>;
}

type UserRecommendationDocumentTopElem = XmlTopElem &
ObjectTypeBase &
CustomElemsBase & {
  Doc: UserRecommendationDocument;
  id: XmlElem<number | null>;
  objects: XmlMultiElem<UserRecommendationDocumentObject | null>;
  calculate_dates: XmlMultiElem<UserRecommendationDocumentCalculateDate | null>;
  context_object: XmlElem<ObjectTypeBase | null>;
  calc_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type UserRecommendationDocument = XmlDocument & {
  TopElem: UserRecommendationDocumentTopElem;
  user_recommendation: UserRecommendationDocumentTopElem;
};
