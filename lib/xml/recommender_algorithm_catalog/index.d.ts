type RecommenderAlgorithmCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  is_cur_user: XmlElem<boolean>;
  is_object_type: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
