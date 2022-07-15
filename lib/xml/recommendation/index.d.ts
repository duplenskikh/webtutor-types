interface RecommendationView extends DescBase {
}

interface RecommendationTopElem extends XmlTopElem<RecommendationDocument>, FileListBase, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  lastname?: XmlElem<string>;
  firstname?: XmlElem<string>;
  middlename?: XmlElem<string>;
  phone?: XmlElem<string>;
  email?: XmlElem<string>;
  work_phone?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  status?: XmlElem<string>;
  desc?: XmlElem<string>;
  vacancy_id?: XmlElem<number>;
  vacancy_name?: XmlElem<string>;
  src_person_id?: XmlElem<number>;
  src_person_fullname?: XmlElem<string>;
  letter_text?: XmlElem<string>;
  comment_recruiter?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<RecommendationView>;
  fullname?(): any;
  set_status?(): any;
}

type RecommendationDocument = XmlDocument<RecommendationTopElem>;
