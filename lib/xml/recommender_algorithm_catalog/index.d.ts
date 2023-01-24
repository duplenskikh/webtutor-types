type RecommenderAlgorithmCatalogDocumentTopElem = XmlTopElem & { Doc: RecommenderAlgorithmCatalogDocument } & 
MSPeriodityBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number>;
  is_cur_user: XmlElem<boolean>;
  is_object_type: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number>;
}

type RecommenderAlgorithmCatalogDocument = XmlDocument & { TopElem: RecommenderAlgorithmCatalogDocumentTopElem; };
