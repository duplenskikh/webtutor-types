interface UserRecommendationDocumentObject extends ObjectTypeBase {
  id: XmlElem<string | null>;
  /** Комментарий */
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
  /** Объект */
  objects: XmlMultiElem<UserRecommendationDocumentObject | null>;
  calculate_dates: XmlMultiElem<UserRecommendationDocumentCalculateDate | null>;
  context_object: XmlElem<ObjectTypeBase | null>;
  calc_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type UserRecommendationDocument = XmlDocument & {
  TopElem: UserRecommendationDocumentTopElem;
  user_recommendation: UserRecommendationDocumentTopElem;
};
