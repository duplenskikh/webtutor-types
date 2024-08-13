type WikiArticleCommunicationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: WikiArticleCommunicationDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  name_value: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_article_communication_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  position: XmlElem<number | null>;
  text_area: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type WikiArticleCommunicationDocument = XmlDocument & {
  TopElem: WikiArticleCommunicationDocumentTopElem;
  wiki_article_communication: WikiArticleCommunicationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
