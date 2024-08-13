type RecommenderAlgorithmApplyingCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  context_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  context_object_id: XmlElem<number | null>;
  context_object_name: XmlElem<string | null>;
  count: XmlElem<number | null>;
  applying_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
