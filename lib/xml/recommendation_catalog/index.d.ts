type RecommendationCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  fullname: XmlElem<string>;
  phone: XmlElem<string>;
  email: XmlElem<string>;
  work_phone: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  status: XmlElem<string, typeof common.vacancy_response_status_types>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  src_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  src_person_fullname: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
