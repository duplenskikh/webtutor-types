type ExpertQuestionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
FileListBase & {
  Doc: ExpertQuestionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  question: XmlElem<string>;
  answer: XmlElem<string>;
  date: XmlElem<Date>;
  normative_date: XmlElem<Date>;
  answer_date: XmlElem<Date>;
  expert_id: XmlElem<number, ExpertCatalogDocumentTopElem>;
  status: XmlElem<boolean>;
  is_faq: XmlElem<boolean>;
  is_disclosed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  question_file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  answer_file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
};

type ExpertQuestionDocument = XmlDocument & {
  TopElem: ExpertQuestionDocumentTopElem;
  expert_question: ExpertQuestionDocumentTopElem;
  DocDesc(): string;
};
