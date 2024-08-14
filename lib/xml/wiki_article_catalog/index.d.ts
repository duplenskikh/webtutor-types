type WikiArticleCatalogDocumentTopElem = XmlTopElem &
ChangeHashFieldsBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_base_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  acquaint_type_id: XmlElem<string | null, typeof common.acquaint_types>;
  /** Статус */
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  author_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата публикации */
  publicate_date: XmlElem<Date | null>;
  critical_publicate_date: XmlElem<Date | null>;
  acquaint_group_ids: XmlMultiElemObject<number | null, GroupCatalogDocumentTopElem>;
  /** Аннотация */
  annotation: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Файлы */
  files_id: XmlMultiElemObject<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  access_group_ids: XmlMultiElemObject<number | null, GroupCatalogDocumentTopElem>;
  /** Анонимный доступ */
  enable_anonymous_access: XmlElem<boolean | null>;
  OnBuild(): void;
};
