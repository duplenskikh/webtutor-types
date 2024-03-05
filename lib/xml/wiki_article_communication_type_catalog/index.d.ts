type WikiArticleCommunicationTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  wiki_communication_type_id: XmlElem<string, typeof common.wiki_communication_types>;
  base_wiki_article_type_id: XmlElem<number, WikiArticleTypeCatalogDocumentTopElem>;
  child_wiki_article_type_id: XmlElem<number, WikiArticleTypeCatalogDocumentTopElem>;
  is_mandatory: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};
