type RecommendationCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  fullname: XmlElem<string | null>;
  phone: XmlElem<string | null>;
  email: XmlElem<string | null>;
  work_phone: XmlElem<string | null>;
  mobile_phone: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  src_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  src_person_fullname: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
