type ClosingDocumentStatuCatalogDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  DocDesc(): string;
};
