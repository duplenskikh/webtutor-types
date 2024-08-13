type KeyPositionThreatDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KeyPositionThreatDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  color: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type KeyPositionThreatDocument = XmlDocument & {
  TopElem: KeyPositionThreatDocumentTopElem;
  key_position_threat: KeyPositionThreatDocumentTopElem;
  DocDesc(): string;
};
