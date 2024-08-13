type RecommenderAlgorithmCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  is_cur_user: XmlElem<boolean>;
  is_object_type: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
