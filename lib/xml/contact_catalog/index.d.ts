type ContactCatalogDocumentTopElem = XmlTopElem & { Doc: ContactCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  project_id: XmlElem<number>;
  type_id: XmlElem<number>;
  status_id: XmlElem<string>;
  result_id: XmlElem<number>;
  initiator_person_id: XmlElem<number>;
  initiator_person_fullname: XmlElem<string>;
  contact_person_id: XmlElem<number>;
  contact_person_fullname: XmlElem<string>;
  contact_org_name: XmlElem<string>;
  contact_position_name: XmlElem<string>;
  contact_org_id: XmlElem<number>;
  previous_contact_id: XmlElem<number>;
  contact_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ContactCatalogDocument = XmlDocument & { TopElem: ContactCatalogDocumentTopElem; };
