type ClosingDocumentStatusDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ClosingDocumentStatusDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ClosingDocumentStatusDocument = XmlDocument & {
  TopElem: ClosingDocumentStatusDocumentTopElem;
  closing_document_status: ClosingDocumentStatusDocumentTopElem;
  DocDesc(): string;
};
