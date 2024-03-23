type KeyPositionThreatDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KeyPositionThreatDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  color: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type KeyPositionThreatDocument = XmlDocument & {
  TopElem: KeyPositionThreatDocumentTopElem;
  key_position_threat: KeyPositionThreatDocumentTopElem;
  DocDesc(): string;
};
