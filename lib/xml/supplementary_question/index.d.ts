interface SupplementaryQuestionSectionInstruction {
  section_instruction_id?: XmlElem<number>;
}

interface SupplementaryQuestionView {
  selector?: XmlElem<string>;
}

interface SupplementaryQuestionTopElem extends XmlTopElem<SupplementaryQuestionDocument>, CompetenceScaleBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  section?: XmlElem<string>;
  type?: XmlElem<string>;
  is_assessment_position_common?: XmlElem<boolean>;
  is_requered?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  section_instructions?: XmlMultiElem<SupplementaryQuestionSectionInstruction>;
  view?: XmlElem<SupplementaryQuestionView>;
}

type SupplementaryQuestionDocument = XmlDocument<SupplementaryQuestionTopElem>;
