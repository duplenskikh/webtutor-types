interface UserRecommendationDocumentObject extends ObjectTypeBase {
  id: XmlElem<string>;
  comment: XmlElem<string>;
  recommender_algorithm_id: XmlElem<number>;
}

interface UserRecommendationDocumentCalculateDate {
  date: XmlElem<Date>;
}

type UserRecommendationDocumentTopElem = XmlTopElem & { Doc: UserRecommendationDocument } & 
ObjectTypeBase &
CustomElemsBase & {
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
};
