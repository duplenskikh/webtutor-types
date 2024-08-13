type ClosingDocumentStatuCatalogDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  DocDesc(): string;
};
