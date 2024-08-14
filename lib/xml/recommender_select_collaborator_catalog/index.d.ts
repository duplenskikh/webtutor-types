type RecommenderSelectCollaboratorCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  base_object_id: XmlElem<number | null>;
  base_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  base_object_name: XmlElem<string | null>;
  selected_object_id: XmlElem<number | null>;
  selected_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  selected_object_name: XmlElem<string | null>;
  created_object_id: XmlElem<number | null>;
  created_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  created_object_name: XmlElem<string | null>;
  implemented: XmlElem<boolean>;
  selected_date: XmlElem<Date | null>;
  implemented_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
