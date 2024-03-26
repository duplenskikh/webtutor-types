type SubstitutionCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  status: XmlElem<string, typeof common.substitution_status_types>;
  substitution_type_id: XmlElem<number, SubstitutionTypeCatalogDocumentTopElem>;
  target_object_type: XmlElem<string>;
  target_object_selector: XmlElem<string>;
  target_object_id: XmlMultiElemObject<number>;
  data_str: XmlElem<string>;
  person_selector: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
