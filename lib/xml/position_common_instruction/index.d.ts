type PositionCommonInstructionDocumentTopElem = XmlTopElem & {
  Doc: PositionCommonInstructionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  section_instruction_id: XmlElem<number, SectionInstructionCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PositionCommonInstructionDocument = XmlDocument & {
  TopElem: PositionCommonInstructionDocumentTopElem;
};
