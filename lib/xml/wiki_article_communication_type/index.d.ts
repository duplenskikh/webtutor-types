type WikiArticleCommunicationTypeDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: WikiArticleCommunicationTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_communication_type_id: XmlElem<string, typeof common.wiki_communication_types>;
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_type_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  is_mandatory: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type WikiArticleCommunicationTypeDocument = XmlDocument & {
  TopElem: WikiArticleCommunicationTypeDocumentTopElem;
  wiki_article_communication_type: WikiArticleCommunicationTypeDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
