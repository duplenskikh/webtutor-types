type KeyPositionThreatDocumentTopElem = XmlTopElem & { Doc: KeyPositionThreatDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
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
};
