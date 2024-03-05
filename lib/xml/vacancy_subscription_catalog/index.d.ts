type VacancySubscriptionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  is_active: XmlElem<boolean>;
  full_text_search_str: XmlElem<string>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  send_vacancy_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
