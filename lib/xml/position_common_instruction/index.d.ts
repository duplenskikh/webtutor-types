type PositionCommonInstructionDocumentTopElem = XmlTopElem & {
  Doc: PositionCommonInstructionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  section_instruction_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionCommonInstructionDocument = XmlDocument & {
  TopElem: PositionCommonInstructionDocumentTopElem;
  position_common_instruction: PositionCommonInstructionDocumentTopElem;
  DocDesc(): string;
};
