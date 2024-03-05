type WikiArticleCommunicationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  position: XmlElem<number>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};
