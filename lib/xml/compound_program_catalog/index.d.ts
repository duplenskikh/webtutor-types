type CompoundProgramCatalogDocumentTopElem = XmlTopElem & { Doc: CompoundProgramCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  min_person_num: XmlElem<number>;
  duration: XmlElem<number>;
  allow_self_assignment: XmlElem<boolean>;
  lectors_id: XmlMultiElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  objects_id: XmlMultiElem<number>;
}

type CompoundProgramCatalogDocument = XmlDocument & { TopElem: CompoundProgramCatalogDocumentTopElem; };
