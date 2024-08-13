type ClosingDocumentStatuCatalogDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  DocDesc(): string;
};
