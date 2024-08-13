type RiskPerspectiveDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RiskPerspectiveDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RiskPerspectiveDocument = XmlDocument & {
  TopElem: RiskPerspectiveDocumentTopElem;
  risk_perspective: RiskPerspectiveDocumentTopElem;
  DocDesc(): string;
};
