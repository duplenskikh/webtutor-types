type PersonalDataProcessingConsentCatalogDocumentTopElem = XmlTopElem & { Doc: PersonalDataProcessingConsentCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  consent_date: XmlElem<Date>;
  person_type: XmlElem<string>;
  org_id: XmlElem<number>;
  site_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PersonalDataProcessingConsentCatalogDocument = XmlDocument & { TopElem: PersonalDataProcessingConsentCatalogDocumentTopElem; };
