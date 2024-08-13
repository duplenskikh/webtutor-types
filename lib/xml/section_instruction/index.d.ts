type SectionInstructionDocumentTopElem = XmlTopElem & {
  Doc: SectionInstructionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  parent_object_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SectionInstructionDocument = XmlDocument & {
  TopElem: SectionInstructionDocumentTopElem;
  section_instruction: SectionInstructionDocumentTopElem;
  DocDesc(): string;
};
