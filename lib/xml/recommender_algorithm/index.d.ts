interface RecommenderAlgorithmDocumentCatalog {
  catalog_name: XmlElem<string>;
}

type RecommenderAlgorithmDocumentTopElem = XmlTopElem & { Doc: RecommenderAlgorithmDocument } &
ObjectCodeNameBase &
WebVariablesBase & {
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number>;
  catalogs: XmlMultiElem<RecommenderAlgorithmDocumentCatalog>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RecommenderAlgorithmDocument = XmlDocument & {
  TopElem: RecommenderAlgorithmDocumentTopElem;
};
