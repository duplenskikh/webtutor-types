interface RecommenderAlgorithmDocumentCatalog {
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog {
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
}

interface RecommenderAlgorithmDocumentContextAlgorithmApplication {
  is_cur_user: XmlElem<boolean>;
  is_object_type: XmlElem<boolean>;
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentContextAlgorithmApplicationCatalog>;
}

type RecommenderAlgorithmDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPeriodityBase &
WebVariablesBase & {
  Doc: RecommenderAlgorithmDocument;
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentCatalog>;
  context_algorithm_application: XmlElem<RecommenderAlgorithmDocumentContextAlgorithmApplication>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RecommenderAlgorithmDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmDocumentTopElem;
};
