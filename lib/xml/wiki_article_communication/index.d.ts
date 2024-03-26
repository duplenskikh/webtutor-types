type WikiArticleCommunicationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: WikiArticleCommunicationDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  name_value: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  wiki_article_communication_type_id: XmlElem<number, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  position: XmlElem<number>;
  text_area: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type WikiArticleCommunicationDocument = XmlDocument & {
  TopElem: WikiArticleCommunicationDocumentTopElem;
  wiki_article_communication: WikiArticleCommunicationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
