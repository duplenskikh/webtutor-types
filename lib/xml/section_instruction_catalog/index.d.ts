type SectionInstructionCatalogDocumentTopElem = XmlTopElem & { Doc: SectionInstructionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  parent_object_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SectionInstructionCatalogDocument = XmlDocument & { TopElem: SectionInstructionCatalogDocumentTopElem; };
