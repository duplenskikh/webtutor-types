type WikiArticleCommunicationTypeDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: WikiArticleCommunicationTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_communication_type_id: XmlElem<string, typeof common.wiki_communication_types>;
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_type_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  /** Обязательный */
  is_mandatory: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type WikiArticleCommunicationTypeDocument = XmlDocument & {
  TopElem: WikiArticleCommunicationTypeDocumentTopElem;
  wiki_article_communication_type: WikiArticleCommunicationTypeDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
