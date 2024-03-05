type RecommenderAlgorithmApplyingCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
  context_object_type: XmlElem<string, typeof common.exchange_object_types>;
  context_object_id: XmlElem<number>;
  context_object_name: XmlElem<string>;
  count: XmlElem<number>;
  applying_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
