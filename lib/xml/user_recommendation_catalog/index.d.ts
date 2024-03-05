type UserRecommendationCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number>;
  context_object_id: XmlElem<number>;
  context_object_type: XmlElem<string>;
  context_object_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
