type RiskPerspectiveDocumentTopElem = XmlTopElem & { Doc: RiskPerspectiveDocument } &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
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
