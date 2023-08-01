interface VacancySubscriptionDocumentSuitableVacancy {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
}

type VacancySubscriptionDocumentTopElem = XmlTopElem & { Doc: VacancySubscriptionDocument } & 
ViewConditionsBase &
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  full_text_search_str: XmlElem<string>;
  site_id: XmlElem<number>;
  suitable_vacancys: XmlMultiElem<VacancySubscriptionDocumentSuitableVacancy>;
  send_vacancy_date: XmlElem<Date>;
  doc_info: XmlElem<DocInfoBase>;
  refresh_suitable_vacancys(): unknown;
};

type VacancySubscriptionDocument = XmlDocument & {
  TopElem: VacancySubscriptionDocumentTopElem;
};
