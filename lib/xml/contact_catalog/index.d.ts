type ContactCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  type_id: XmlElem<number, ContactTypeCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.contact_status_types>;
  result_id: XmlElem<number, ContactResultCatalogDocumentTopElem>;
  initiator_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  initiator_person_fullname: XmlElem<string>;
  contact_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  contact_person_fullname: XmlElem<string>;
  contact_org_name: XmlElem<string>;
  contact_position_name: XmlElem<string>;
  contact_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  previous_contact_id: XmlElem<number, ContactCatalogDocumentTopElem>;
  contact_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
