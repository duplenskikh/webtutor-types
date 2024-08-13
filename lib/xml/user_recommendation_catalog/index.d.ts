type UserRecommendationCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  context_object_id: XmlElem<number | null>;
  context_object_type: XmlElem<string | null>;
  context_object_name: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
