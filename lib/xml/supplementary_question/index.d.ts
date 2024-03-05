interface SupplementaryQuestionDocumentSectionInstruction {
  section_instruction_id: XmlElem<number, SectionInstructionCatalogDocumentTopElem>;
}

type SupplementaryQuestionDocumentTopElem = XmlTopElem &
CompetenceScaleBase &
AdminAccessBase & {
  Doc: SupplementaryQuestionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  section: XmlElem<string>;
  type: XmlElem<string, typeof common.supplementary_question_types>;
  is_assessment_position_common: XmlElem<boolean>;
  section_instructions: XmlMultiElem<SupplementaryQuestionDocumentSectionInstruction>;
  is_requered: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SupplementaryQuestionDocument = XmlDocument & {
  TopElem: SupplementaryQuestionDocumentTopElem;
};
