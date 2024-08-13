type ExpertQuestionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
FileListBase & {
  Doc: ExpertQuestionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  question: XmlElem<string | null>;
  answer: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  normative_date: XmlElem<Date | null>;
  answer_date: XmlElem<Date | null>;
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
  status: XmlElem<boolean>;
  is_faq: XmlElem<boolean>;
  is_disclosed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  question_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  answer_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
};

type ExpertQuestionDocument = XmlDocument & {
  TopElem: ExpertQuestionDocumentTopElem;
  expert_question: ExpertQuestionDocumentTopElem;
  DocDesc(): string;
};
