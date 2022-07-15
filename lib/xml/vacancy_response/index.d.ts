interface VacancyResponseTopElem extends XmlTopElem<VacancyResponseDocument>, AdminAccessBase, FileListBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  vacancy_id?: XmlElem<number>;
  vacancy_name?: XmlElem<string>;
  recruiter_person_id?: XmlElem<number>;
  comment_recruiter?: XmlElem<string>;
  response_author_person_id?: XmlElem<number>;
  resume_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  date_invitation?: XmlElem<Date>;
  desc?: XmlElem<string>;
  status?: XmlElem<string>;
  employer_answer?: XmlElem<string>;
  career_reserve_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DescBase>;
  set_status?(): any;
}

type VacancyResponseDocument = XmlDocument<VacancyResponseTopElem>;
