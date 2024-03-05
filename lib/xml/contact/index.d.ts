interface ContactDocumentPollResult {
  poll_result_id: XmlElem<number, PollResultCatalogDocumentTopElem>;
}

type ContactDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  Doc: ContactDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  type_id: XmlElem<number, ContactTypeCatalogDocumentTopElem>;
  initiator_person_fullname(): unknown;
  contact_person_fullname(): unknown;
  initiator_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & XmlElem<MsPersonSdInnerBase>;
  contact_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & XmlElem<MsPersonSdInnerBase>;
  contact_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.contact_status_types>;
  contact_date: XmlElem<Date>;
  previous_contact_id: XmlElem<number, ContactCatalogDocumentTopElem>;
  result_id: XmlElem<number, ContactResultCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  poll_results: XmlMultiElem<ContactDocumentPollResult>;
  desc: XmlElem<string>;
};

type ContactDocument = XmlDocument & {
  TopElem: ContactDocumentTopElem;
};
