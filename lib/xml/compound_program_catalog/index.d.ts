type CompoundProgramCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  min_person_num: XmlElem<number>;
  duration: XmlElem<number>;
  allow_self_assignment: XmlElem<boolean>;
  lectors_id: XmlMultiElemObject<number, LectorCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  objects_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};
