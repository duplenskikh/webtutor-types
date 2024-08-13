type SubstitutionCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  status: XmlElem<string, typeof common.substitution_status_types>;
  substitution_type_id: XmlElem<number | null, SubstitutionTypeCatalogDocumentTopElem>;
  target_object_type: XmlElem<string | null>;
  target_object_selector: XmlElem<string | null>;
  target_object_id: XmlMultiElemObject<number | null>;
  data_str: XmlElem<string | null>;
  person_selector: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
