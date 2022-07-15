interface RecommenderAlgorithmCatalog {
  catalog_name?: XmlElem<string>;
}

interface RecommenderAlgorithmContextAlgorithmApplicationCatalog {
  catalog_name?: XmlElem<string>;
}

interface RecommenderAlgorithmContextAlgorithmApplication {
  is_cur_user?: XmlElem<boolean>;
  is_object_type?: XmlElem<boolean>;
  catalogs?: XmlMultiElem<RecommenderAlgorithmContextAlgorithmApplicationCatalog>;
}

interface RecommenderAlgorithmTopElem extends XmlTopElem<RecommenderAlgorithmDocument>, ObjectCodeNameBase, MsPeriodityBase, WebVariablesBase {
  is_enabled?: XmlElem<boolean>;
  code_library_id?: XmlElem<number>;
  use_cache?: XmlElem<boolean>;
  cache_time?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  catalogs?: XmlMultiElem<RecommenderAlgorithmCatalog>;
  context_algorithm_application?: XmlElem<RecommenderAlgorithmContextAlgorithmApplication>;
}

type RecommenderAlgorithmDocument = XmlDocument<RecommenderAlgorithmTopElem>;
