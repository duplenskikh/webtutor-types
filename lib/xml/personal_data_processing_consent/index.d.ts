type PersonalDataProcessingConsentDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: PersonalDataProcessingConsentDocument;
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  consent_date: XmlElem<Date | null>;
  person_type: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  is_candidate: XmlElem<boolean | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type PersonalDataProcessingConsentDocument = XmlDocument & {
  TopElem: PersonalDataProcessingConsentDocumentTopElem;
  personal_data_processing_consent: PersonalDataProcessingConsentDocumentTopElem;
  DocDesc(): string;
  OnInit(): void;
};
