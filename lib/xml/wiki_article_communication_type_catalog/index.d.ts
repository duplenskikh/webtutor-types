type WikiArticleCommunicationTypeCatalogDocumentTopElem = XmlTopElem & { Doc: WikiArticleCommunicationTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  wiki_communication_type_id: XmlElem<string>;
  base_wiki_article_type_id: XmlElem<number>;
  child_wiki_article_type_id: XmlElem<number>;
  is_mandatory: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
}

type WikiArticleCommunicationTypeCatalogDocument = XmlDocument & { TopElem: WikiArticleCommunicationTypeCatalogDocumentTopElem; };
