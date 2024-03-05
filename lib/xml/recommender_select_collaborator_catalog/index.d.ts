type RecommenderSelectCollaboratorCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
  base_object_id: XmlElem<number>;
  base_object_type: XmlElem<string, typeof common.exchange_object_types>;
  base_object_name: XmlElem<string>;
  selected_object_id: XmlElem<number>;
  selected_object_type: XmlElem<string, typeof common.exchange_object_types>;
  selected_object_name: XmlElem<string>;
  created_object_id: XmlElem<number>;
  created_object_type: XmlElem<string, typeof common.exchange_object_types>;
  created_object_name: XmlElem<string>;
  implemented: XmlElem<boolean>;
  selected_date: XmlElem<Date>;
  implemented_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
