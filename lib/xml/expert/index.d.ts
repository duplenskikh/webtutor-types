interface ExpertDocumentFaq {
  faq_id: XmlElem<string>;
  faq_question: XmlElem<string>;
  faq_answer: XmlElem<string>;
}

type ExpertDocumentTopElem = XmlTopElem &
PersonBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ExpertDocument;
  id: XmlElem<number>;
  name(): string;
  code: XmlElem<string>;
  desc: XmlElem<string>;
  type: XmlElem<string, typeof common.lector_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  sub_expert_id: XmlElem<number, ExpertCatalogDocumentTopElem>;
  rating: XmlElem<number>;
  answer_expire_time: XmlElem<number>;
  faqs: XmlMultiElem<ExpertDocumentFaq>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ExpertDocument = XmlDocument & {
  TopElem: ExpertDocumentTopElem;
  expert: ExpertDocumentTopElem;
  DocDesc(): string;
};
