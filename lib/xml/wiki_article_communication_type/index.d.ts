type WikiArticleCommunicationTypeDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: WikiArticleCommunicationTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  wiki_communication_type_id: XmlElem<string, typeof common.wiki_communication_types>;
  base_wiki_article_type_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_type_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  is_mandatory: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type WikiArticleCommunicationTypeDocument = XmlDocument & {
  TopElem: WikiArticleCommunicationTypeDocumentTopElem;
};
