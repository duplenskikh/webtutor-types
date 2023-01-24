type PositionCommonInstructionCatalogDocumentTopElem = XmlTopElem & { Doc: PositionCommonInstructionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  position_common_id: XmlElem<number>;
  position_common_name: XmlElem<string>;
  section_instruction_id: XmlElem<number>;
  section_instruction_name: XmlElem<string>;
  desc: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PositionCommonInstructionCatalogDocument = XmlDocument & { TopElem: PositionCommonInstructionCatalogDocumentTopElem; };
