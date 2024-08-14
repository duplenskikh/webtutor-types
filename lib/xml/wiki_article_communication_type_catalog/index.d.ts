type WikiArticleCommunicationTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_communication_type_id: XmlElem<string, typeof common.wiki_communication_types>;
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  child_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /** Обязательный */
  is_mandatory: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
