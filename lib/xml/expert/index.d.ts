interface ExpertFaq {
  faq_id?: XmlElem<string>;
  faq_question?: XmlElem<string>;
  faq_answer?: XmlElem<string>;
}

interface ExpertViewFilter extends AuFtFilter {
}

interface ExpertView extends DescBase {
  filter?: XmlElem<ExpertViewFilter>;
}

interface ExpertTopElem extends XmlTopElem<ExpertDocument>, PersonBase, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  desc?: XmlElem<string>;
  type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  sub_expert_id?: XmlElem<number>;
  rating?: XmlElem<number>;
  answer_expire_time?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  faqs?: XmlMultiElem<ExpertFaq>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ExpertView>;
  name?(): any;
}

type ExpertDocument = XmlDocument<ExpertTopElem>;
