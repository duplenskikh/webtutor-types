interface SupplementaryQuestionDocumentSectionInstruction {
  section_instruction_id: XmlElem<number>;
}

type SupplementaryQuestionDocumentTopElem = XmlTopElem & { Doc: SupplementaryQuestionDocument } & 
CompetenceScaleBase &
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  section: XmlElem<string>;
  type: XmlElem<string>;
  is_assessment_position_common: XmlElem<boolean>;
  section_instructions: XmlMultiElem<SupplementaryQuestionDocumentSectionInstruction>;
  is_requered: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SupplementaryQuestionDocument = XmlDocument & {
  TopElem: SupplementaryQuestionDocumentTopElem;
};
