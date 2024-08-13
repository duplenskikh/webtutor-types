interface VacancySubscriptionDocumentSuitableVacancy {
  id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
}

type VacancySubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
ViewConditionsBase &
AdminAccessBase & {
  Doc: VacancySubscriptionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_active: XmlElem<boolean | null>;
  full_text_search_str: XmlElem<string | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  suitable_vacancys: XmlMultiElem<VacancySubscriptionDocumentSuitableVacancy | null>;
  send_vacancy_date: XmlElem<Date | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  refresh_suitable_vacancys(): VacancyCatalogDocumentTopElem;
};

type VacancySubscriptionDocument = XmlDocument & {
  TopElem: VacancySubscriptionDocumentTopElem;
  vacancy_subscription: VacancySubscriptionDocumentTopElem;
  DocDesc(): string;
};
