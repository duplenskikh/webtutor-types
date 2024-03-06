type RiskLevelDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RiskLevelDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type RiskLevelDocument = XmlDocument & {
  TopElem: RiskLevelDocumentTopElem;
  risk_level: RiskLevelDocumentTopElem;
  DocDesc(): unknown;
};
