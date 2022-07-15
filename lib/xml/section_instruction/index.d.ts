interface SectionInstructionView {
  selector?: XmlElem<string>;
}

interface SectionInstructionTopElem extends XmlTopElem<SectionInstructionDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<SectionInstructionView>;
}

type SectionInstructionDocument = XmlDocument<SectionInstructionTopElem>;
