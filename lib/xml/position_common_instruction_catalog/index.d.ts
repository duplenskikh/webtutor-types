type PositionCommonInstructionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_common_name: XmlElem<string>;
  section_instruction_id: XmlElem<number, SectionInstructionCatalogDocumentTopElem>;
  section_instruction_name: XmlElem<string>;
  desc: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
