type ReadinessLevelDocumentTopElem = XmlTopElem & { Doc: ReadinessLevelDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ReadinessLevelDocument = XmlDocument & {
  TopElem: ReadinessLevelDocumentTopElem;
};
