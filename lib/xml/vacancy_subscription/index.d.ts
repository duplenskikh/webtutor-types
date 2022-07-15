interface VacancySubscriptionSuitableVacancy {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  code?: XmlElem<string>;
}

interface VacancySubscriptionTopElem extends XmlTopElem<VacancySubscriptionDocument>, MsPersonSdBase, ViewConditionsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_active?: XmlElem<boolean>;
  full_text_search_str?: XmlElem<string>;
  site_id?: XmlElem<number>;
  send_vacancy_date?: XmlElem<Date>;
  doc_info?: XmlElem<DocInfoBase>;
  suitable_vacancys?: XmlMultiElem<VacancySubscriptionSuitableVacancy>;
  refresh_suitable_vacancys?(): any;
}

type VacancySubscriptionDocument = XmlDocument<VacancySubscriptionTopElem>;
