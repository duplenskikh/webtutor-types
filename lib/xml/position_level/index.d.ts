type PositionLevelDocumentTopElem = XmlTopElem & { Doc: PositionLevelDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PositionLevelDocument = XmlDocument & {
  TopElem: PositionLevelDocumentTopElem;
};
