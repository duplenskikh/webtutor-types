type RecommendationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RecommendationDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  lastname: XmlElem<string>;
  firstname: XmlElem<string>;
  middlename: XmlElem<string>;
  fullname(): unknown;
  phone: XmlElem<string>;
  email: XmlElem<string>;
  work_phone: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  status: XmlElem<string, typeof common.vacancy_response_status_types>;
  desc: XmlElem<string>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  src_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  src_person_fullname: XmlElem<string>;
  letter_text: XmlElem<string>;
  comment_recruiter: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_status(newStatus: string, sendNotifications: boolean): unknown;
};

type RecommendationDocument = XmlDocument & {
  TopElem: RecommendationDocumentTopElem;
  recommendation: RecommendationDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
