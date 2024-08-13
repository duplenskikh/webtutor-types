type WikiBaseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  wiki_base_type_id: XmlElem<string | null, typeof common.wiki_base_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.wiki_base_statuses>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  previous_version_object_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  copy_access_in_new_article: XmlElem<boolean>;
  process_embedding: XmlElem<boolean>;
  tags: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
