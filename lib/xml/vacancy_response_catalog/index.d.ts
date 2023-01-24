type VacancyResponseCatalogDocumentTopElem = XmlTopElem & { Doc: VacancyResponseCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  recruiter_person_id: XmlElem<number>;
  recruiter_person_fullname: XmlElem<string>;
  response_author_person_id: XmlElem<number>;
  response_author_fullname: XmlElem<string>;
  resume_id: XmlElem<number>;
  career_reserve_id: XmlElem<number>;
  date: XmlElem<Date>;
  date_invitation: XmlElem<Date>;
  status: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VacancyResponseCatalogDocument = XmlDocument & { TopElem: VacancyResponseCatalogDocumentTopElem; };
