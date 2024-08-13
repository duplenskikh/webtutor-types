type SectionInstructionDocumentTopElem = XmlTopElem & {
  Doc: SectionInstructionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Корневой раздел инструкции */
  parent_object_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SectionInstructionDocument = XmlDocument & {
  TopElem: SectionInstructionDocumentTopElem;
  section_instruction: SectionInstructionDocumentTopElem;
  DocDesc(): string;
};
