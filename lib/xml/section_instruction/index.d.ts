type SectionInstructionDocumentTopElem = XmlTopElem & {
  Doc: SectionInstructionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  parent_object_id: XmlElem<number, SectionInstructionCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SectionInstructionDocument = XmlDocument & {
  TopElem: SectionInstructionDocumentTopElem;
  section_instruction: SectionInstructionDocumentTopElem;
  DocDesc(): string;
};
