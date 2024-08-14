type WikiArticleCommunicationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
