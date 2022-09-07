type RecommendationDocumentTopElem = XmlTopElem & { Doc: RecommendationDocument } & 
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  code: XmlElem<string>;
  lastname: XmlElem<string>;
  firstname: XmlElem<string>;
  middlename: XmlElem<string>;
  fullname?(): unknown;
  phone: XmlElem<string>;
  email: XmlElem<string>;
  work_phone: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  status: XmlElem<string>;
  desc: XmlElem<string>;
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  src_person_id: XmlElem<number>;
  src_person_fullname: XmlElem<string>;
  letter_text: XmlElem<string>;
  comment_recruiter: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_status?(): unknown;
}

type RecommendationDocument = XmlDocument & {
  TopElem: RecommendationDocumentTopElem;
};
