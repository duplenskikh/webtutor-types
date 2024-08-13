type PositionCommonInstructionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_common_name: XmlElem<string | null>;
  section_instruction_id: XmlElem<number | null, SectionInstructionCatalogDocumentTopElem>;
  section_instruction_name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
