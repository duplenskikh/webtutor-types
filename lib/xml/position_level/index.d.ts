type PositionLevelDocumentTopElem = XmlTopElem & {
  Doc: PositionLevelDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionLevelDocument = XmlDocument & {
  TopElem: PositionLevelDocumentTopElem;
  position_level: PositionLevelDocumentTopElem;
  DocDesc(): string;
};
