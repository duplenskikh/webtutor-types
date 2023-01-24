type WikiArticleCommunicationCatalogDocumentTopElem = XmlTopElem & { Doc: WikiArticleCommunicationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  wiki_article_comm_type_id: XmlElem<number>;
  base_wiki_article_id: XmlElem<number>;
  child_wiki_article_id: XmlElem<number>;
  position: XmlElem<number>;
  modification_date: XmlElem<Date>;
}

type WikiArticleCommunicationCatalogDocument = XmlDocument & { TopElem: WikiArticleCommunicationCatalogDocumentTopElem; };
