type PersonalDataProcessingConsentDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: PersonalDataProcessingConsentDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  consent_date: XmlElem<Date>;
  person_type: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  is_candidate: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type PersonalDataProcessingConsentDocument = XmlDocument & {
  TopElem: PersonalDataProcessingConsentDocumentTopElem;
  personal_data_processing_consent: PersonalDataProcessingConsentDocumentTopElem;
  DocDesc(): string;
  OnInit(): void;
};
