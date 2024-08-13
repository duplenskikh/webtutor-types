type VacancySubscriptionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  is_active: XmlElem<boolean | null>;
  full_text_search_str: XmlElem<string | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  send_vacancy_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
