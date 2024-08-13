interface ExpertDocumentFaq {
  faq_id: XmlElem<string | null>;
  faq_question: XmlElem<string | null>;
  faq_answer: XmlElem<string | null>;
}

type ExpertDocumentTopElem = XmlTopElem &
PersonBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ExpertDocument;
  id: XmlElem<number | null>;
  name(): string;
  code: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  type: XmlElem<string, typeof common.lector_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  sub_expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
  rating: XmlElem<number | null>;
  answer_expire_time: XmlElem<number | null>;
  faqs: XmlMultiElem<ExpertDocumentFaq | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ExpertDocument = XmlDocument & {
  TopElem: ExpertDocumentTopElem;
  expert: ExpertDocumentTopElem;
  DocDesc(): string;
};
