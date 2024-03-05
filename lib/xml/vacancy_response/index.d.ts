type VacancyResponseDocumentTopElem = XmlTopElem &
MsPersonSdBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: VacancyResponseDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  recruiter_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & XmlElem<MsPersonSdInnerBase>;
  comment_recruiter: XmlElem<string>;
  response_author_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & XmlElem<MsPersonSdInnerBase>;
  resume_id: XmlElem<number, ResumeCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  date_invitation: XmlElem<Date>;
  desc: XmlElem<string>;
  status: XmlElem<string, typeof common.vacancy_response_status_types>;
  employer_answer: XmlElem<string>;
  career_reserve_id: XmlElem<number, CareerReserveCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  set_status(sNewStatusParam: string, bSendNotificationsParam: boolean): unknown;
};

type VacancyResponseDocument = XmlDocument & {
  TopElem: VacancyResponseDocumentTopElem;
};
