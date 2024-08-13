interface ContactDocumentPollResult {
  poll_result_id: XmlElem<number | null, PollResultCatalogDocumentTopElem>;
}

type ContactDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  Doc: ContactDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  type_id: XmlElem<number | null, ContactTypeCatalogDocumentTopElem>;
  initiator_person_fullname(): string;
  contact_person_fullname(): string;
  initiator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  contact_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  contact_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.contact_status_types>;
  contact_date: XmlElem<Date | null>;
  previous_contact_id: XmlElem<number | null, ContactCatalogDocumentTopElem>;
  result_id: XmlElem<number | null, ContactResultCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  poll_results: XmlMultiElem<ContactDocumentPollResult | null>;
  desc: XmlElem<string | null>;
};

type ContactDocument = XmlDocument & {
  TopElem: ContactDocumentTopElem;
  contact: ContactDocumentTopElem;
  DocDesc(): string;
};
