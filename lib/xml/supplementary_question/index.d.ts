interface SupplementaryQuestionDocumentSectionInstruction {
  section_instruction_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
}

type SupplementaryQuestionDocumentTopElem = XmlTopElem &
CompetenceScaleBase &
AdminAccessBase & {
  Doc: SupplementaryQuestionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  section: XmlElem<string | null>;
  type: XmlElem<string, typeof common.supplementary_question_types>;
  is_assessment_position_common: XmlElem<boolean>;
  section_instructions: XmlMultiElem<SupplementaryQuestionDocumentSectionInstruction | null>;
  is_requered: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SupplementaryQuestionDocument = XmlDocument & {
  TopElem: SupplementaryQuestionDocumentTopElem;
  supplementary_question: SupplementaryQuestionDocumentTopElem;
  DocDesc(): string;
};
