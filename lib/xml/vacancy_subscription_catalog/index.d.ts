type VacancySubscriptionCatalogDocumentTopElem = XmlTopElem & { Doc: VacancySubscriptionCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  is_active: XmlElem<boolean>;
  full_text_search_str: XmlElem<string>;
  site_id: XmlElem<number>;
  send_vacancy_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VacancySubscriptionCatalogDocument = XmlDocument & { TopElem: VacancySubscriptionCatalogDocumentTopElem; };
