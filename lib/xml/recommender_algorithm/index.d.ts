interface RecommenderAlgorithmDocumentCatalog {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog {
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplication {
  is_cur_user: XmlElem<boolean>;
  is_object_type: XmlElem<boolean>;
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog | null>;
}

type RecommenderAlgorithmDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPeriodityBase &
WebVariablesBase & {
  Doc: RecommenderAlgorithmDocument;
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentCatalog | null>;
  context_algorithm_application: XmlElem<RecommenderAlgorithmDocumentContextAlgorithmApplication | null>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderAlgorithmDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmDocumentTopElem;
  recommender_algorithm: RecommenderAlgorithmDocumentTopElem;
};
