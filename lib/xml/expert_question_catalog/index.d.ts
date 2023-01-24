type ExpertQuestionCatalogDocumentTopElem = XmlTopElem & { Doc: ExpertQuestionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  normative_date: XmlElem<Date>;
  answer_date: XmlElem<Date>;
  question: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  expert_id: XmlElem<number>;
  status: XmlElem<boolean>;
  is_faq: XmlElem<boolean>;
  is_disclosed: XmlElem<boolean>;
  question_file_id: XmlElem<number>;
  answer_file_id: XmlElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ExpertQuestionCatalogDocument = XmlDocument & { TopElem: ExpertQuestionCatalogDocumentTopElem; };
