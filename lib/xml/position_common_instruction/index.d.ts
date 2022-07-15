interface PositionCommonInstructionView extends DescBase {
  text_selector?: XmlElem<string>;
  view_desc_in_html?: XmlElem<boolean>;
}

interface PositionCommonInstructionTopElem extends XmlTopElem<PositionCommonInstructionDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  position_common_id?: XmlElem<number>;
  section_instruction_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<PositionCommonInstructionView>;
}

type PositionCommonInstructionDocument = XmlDocument<PositionCommonInstructionTopElem>;
