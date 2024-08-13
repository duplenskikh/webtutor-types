type RiskLevelDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RiskLevelDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type RiskLevelDocument = XmlDocument & {
  TopElem: RiskLevelDocumentTopElem;
  risk_level: RiskLevelDocumentTopElem;
  DocDesc(): string;
};
