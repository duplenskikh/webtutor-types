type WikiArticleCommunicationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: WikiArticleCommunicationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Название */
  name_value: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_article_communication_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type WikiArticleCommunicationDocument = XmlDocument & {
  TopElem: WikiArticleCommunicationDocumentTopElem;
  wiki_article_communication: WikiArticleCommunicationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
