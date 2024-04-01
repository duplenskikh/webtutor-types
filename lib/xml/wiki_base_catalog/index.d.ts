type WikiBaseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  wiki_base_type_id: XmlElem<string, typeof common.wiki_base_types>;
  status: XmlElem<string, typeof common.wiki_base_statuses>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  previous_version_object_id: XmlElem<number, WikiBaseCatalogDocumentTopElem>;
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  copy_access_in_new_article: XmlElem<boolean>;
  process_embedding: XmlElem<boolean>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  experts: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
