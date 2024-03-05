type VacancyResponseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  recruiter_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  recruiter_person_fullname: XmlElem<string>;
  response_author_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  response_author_fullname: XmlElem<string>;
  resume_id: XmlElem<number, ResumeCatalogDocumentTopElem>;
  career_reserve_id: XmlElem<number, CareerReserveCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  date_invitation: XmlElem<Date>;
  status: XmlElem<string, typeof common.vacancy_response_status_types>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
