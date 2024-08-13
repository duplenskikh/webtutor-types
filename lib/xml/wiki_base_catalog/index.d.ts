type WikiBaseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  wiki_base_type_id: XmlElem<string | null, typeof common.wiki_base_types>;
  status: XmlElem<string | null, typeof common.wiki_base_statuses>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  previous_version_object_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  copy_access_in_new_article: XmlElem<boolean>;
  process_embedding: XmlElem<boolean>;
  tags: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
