type PositionCommonInstructionDocumentTopElem = XmlTopElem & {
  Doc: PositionCommonInstructionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Типовая должность */
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  /** Раздел инструкции */
  section_instruction_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionCommonInstructionDocument = XmlDocument & {
  TopElem: PositionCommonInstructionDocumentTopElem;
  position_common_instruction: PositionCommonInstructionDocumentTopElem;
  DocDesc(): string;
};
