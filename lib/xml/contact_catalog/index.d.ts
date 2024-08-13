type ContactCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  type_id: XmlElem<number | null, ContactTypeCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.contact_status_types>;
  result_id: XmlElem<number | null, ContactResultCatalogDocumentTopElem>;
  initiator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  initiator_person_fullname: XmlElem<string | null>;
  contact_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  contact_person_fullname: XmlElem<string | null>;
  contact_org_name: XmlElem<string | null>;
  contact_position_name: XmlElem<string | null>;
  contact_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  previous_contact_id: XmlElem<number | null, ContactCatalogDocumentTopElem>;
  contact_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
