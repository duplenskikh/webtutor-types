type VacancyResponseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  recruiter_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recruiter_person_fullname: XmlElem<string | null>;
  response_author_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  response_author_fullname: XmlElem<string | null>;
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  date_invitation: XmlElem<Date | null>;
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  creation_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
