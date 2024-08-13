type CompoundProgramCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  min_person_num: XmlElem<number | null>;
  duration: XmlElem<number | null>;
  allow_self_assignment: XmlElem<boolean>;
  lectors_id: XmlMultiElemObject<number | null, LectorCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  objects_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
