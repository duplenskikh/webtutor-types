interface UserRecommendationObject extends ObjectTypeBase {
  id?: XmlElem<string>;
  comment?: XmlElem<string>;
  recommender_algorithm_id?: XmlElem<number>;
}

interface UserRecommendationCalculateDate {
  date?: XmlElem<Date>;
}

interface UserRecommendationContextObject extends ObjectTypeBase {
}

interface UserRecommendationTopElem extends XmlTopElem<UserRecommendationDocument>, ObjectTypeBase, CustomElemsBase {
  id?: XmlElem<number>;
  calc_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  objects?: XmlMultiElem<UserRecommendationObject>;
  calculate_dates?: XmlMultiElem<UserRecommendationCalculateDate>;
  context_object?: XmlElem<UserRecommendationContextObject>;
}

type UserRecommendationDocument = XmlDocument<UserRecommendationTopElem>;
