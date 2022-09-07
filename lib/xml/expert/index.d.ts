interface ExpertDocumentFaq {
  faq_id: XmlElem<string>;
  faq_question: XmlElem<string>;
  faq_answer: XmlElem<string>;
}

type ExpertDocumentTopElem = XmlTopElem & { Doc: ExpertDocument } & 
PersonBase &
CustomElemsBase &
AdminAccessBase & {
  name(): unknown;
  code: XmlElem<string>;
  desc: XmlElem<string>;
  type: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  sub_expert_id: XmlElem<number>;
  rating: XmlElem<number>;
  answer_expire_time: XmlElem<number>;
  faqs: XmlMultiElem<ExpertDocumentFaq>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type ExpertDocument = XmlDocument & { TopElem: ExpertDocumentTopElem; };
