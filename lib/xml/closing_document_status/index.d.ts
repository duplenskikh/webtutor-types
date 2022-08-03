type ClosingDocumentStatusDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ClosingDocumentStatusDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ClosingDocumentStatusDocument = XmlDocument & {
  TopElem: ClosingDocumentStatusDocumentTopElem;
};
