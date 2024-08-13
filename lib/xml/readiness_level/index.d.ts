type ReadinessLevelDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ReadinessLevelDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ReadinessLevelDocument = XmlDocument & {
  TopElem: ReadinessLevelDocumentTopElem;
  readiness_level: ReadinessLevelDocumentTopElem;
  DocDesc(): string;
};
