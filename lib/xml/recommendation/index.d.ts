type RecommendationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RecommendationDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  lastname: XmlElem<string | null>;
  firstname: XmlElem<string | null>;
  middlename: XmlElem<string | null>;
  fullname(): string;
  phone: XmlElem<string | null>;
  email: XmlElem<string | null>;
  work_phone: XmlElem<string | null>;
  mobile_phone: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.vacancy_response_status_types>;
  desc: XmlElem<string | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  src_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  src_person_fullname: XmlElem<string | null>;
  letter_text: XmlElem<string | null>;
  comment_recruiter: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  set_status(newStatus: string, sendNotifications: boolean): void;
};

type RecommendationDocument = XmlDocument & {
  TopElem: RecommendationDocumentTopElem;
  recommendation: RecommendationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
