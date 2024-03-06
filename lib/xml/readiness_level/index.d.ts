type ReadinessLevelDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ReadinessLevelDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ReadinessLevelDocument = XmlDocument & {
  TopElem: ReadinessLevelDocumentTopElem;
  readiness_level: ReadinessLevelDocumentTopElem;
  DocDesc(): unknown;
};
