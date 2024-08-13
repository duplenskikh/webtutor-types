type WikiArticleCatalogDocumentTopElem = XmlTopElem &
ChangeHashFieldsBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_base_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  acquaint_type_id: XmlElem<string | null, typeof common.acquaint_types>;
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  create_date: XmlElem<Date | null>;
  author_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  publicate_date: XmlElem<Date | null>;
  critical_publicate_date: XmlElem<Date | null>;
  acquaint_group_ids: XmlMultiElemObject<number | null, GroupCatalogDocumentTopElem>;
  annotation: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  files_id: XmlMultiElemObject<number | null, ResourceCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  access_group_ids: XmlMultiElemObject<number | null, GroupCatalogDocumentTopElem>;
  enable_anonymous_access: XmlElem<boolean | null>;
  OnBuild(): void;
};
