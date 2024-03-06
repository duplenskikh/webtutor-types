interface VacancySubscriptionDocumentSuitableVacancysSuitableVacancy {
  id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  name: XmlElem<string>;
  code: XmlElem<string>;
}

interface VacancySubscriptionDocumentSuitableVacancys {
  suitable_vacancy: XmlElem<VacancySubscriptionDocumentSuitableVacancysSuitableVacancy>;
}

type VacancySubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
ViewConditionsBase &
AdminAccessBase & {
  Doc: VacancySubscriptionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  full_text_search_str: XmlElem<string>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  suitable_vacancys: XmlElem<VacancySubscriptionDocumentSuitableVacancys>;
  send_vacancy_date: XmlElem<Date>;
  doc_info: XmlElem<DocInfoBase>;
  refresh_suitable_vacancys(): unknown;
};

type VacancySubscriptionDocument = XmlDocument & {
  TopElem: VacancySubscriptionDocumentTopElem;
  vacancy_subscription: VacancySubscriptionDocumentTopElem;
  DocDesc(): unknown;
};
