type PersonalDataProcessingConsentCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  consent_date: XmlElem<Date | null>;
  person_type: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
