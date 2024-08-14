interface RecommenderAlgorithmDocumentCatalog {
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog {
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplication {
  /** Текущий пользователь */
  is_cur_user: XmlElem<boolean>;
  /** Типы объектов */
  is_object_type: XmlElem<boolean>;
  /** Типы объектов */
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog | null>;
}

type RecommenderAlgorithmDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPeriodityBase &
WebVariablesBase & {
  Doc: RecommenderAlgorithmDocument;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Типы объектов */
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentCatalog | null>;
  context_algorithm_application: XmlElem<RecommenderAlgorithmDocumentContextAlgorithmApplication | null>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderAlgorithmDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmDocumentTopElem;
  recommender_algorithm: RecommenderAlgorithmDocumentTopElem;
};
