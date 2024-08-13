type RecommenderAlgorithmApplyingCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  context_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  context_object_id: XmlElem<number | null>;
  context_object_name: XmlElem<string | null>;
  count: XmlElem<number | null>;
  applying_date: XmlElem<Date | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
