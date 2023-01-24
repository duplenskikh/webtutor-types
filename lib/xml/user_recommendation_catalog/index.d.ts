type UserRecommendationCatalogDocumentTopElem = XmlTopElem & { Doc: UserRecommendationCatalogDocument } & 
ObjectTypeBase & {
  id: XmlElem<number>;
  context_object_id: XmlElem<number>;
  context_object_type: XmlElem<string>;
  context_object_name: XmlElem<string>;
}

type UserRecommendationCatalogDocument = XmlDocument & { TopElem: UserRecommendationCatalogDocumentTopElem; };
