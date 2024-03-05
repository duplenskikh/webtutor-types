type RiskPerspectiveDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RiskPerspectiveDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RiskPerspectiveDocument = XmlDocument & {
  TopElem: RiskPerspectiveDocumentTopElem;
};
