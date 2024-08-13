type PositionLevelDocumentTopElem = XmlTopElem & {
  Doc: PositionLevelDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionLevelDocument = XmlDocument & {
  TopElem: PositionLevelDocumentTopElem;
  position_level: PositionLevelDocumentTopElem;
  DocDesc(): string;
};
