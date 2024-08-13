type VacancyResponseDocumentTopElem = XmlTopElem &
MsPersonSdBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: VacancyResponseDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  recruiter_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  comment_recruiter: XmlElem<string | null>;
  response_author_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  date_invitation: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  employer_answer: XmlElem<string | null>;
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  set_status(newStatus: string, sendNotifications: boolean): void;
};

type VacancyResponseDocument = XmlDocument & {
  TopElem: VacancyResponseDocumentTopElem;
  vacancy_response: VacancyResponseDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
