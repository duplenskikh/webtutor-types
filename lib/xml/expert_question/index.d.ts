interface ExpertQuestionView extends DescBase {
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
}

interface ExpertQuestionTopElem extends XmlTopElem<ExpertQuestionDocument>, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, FileListBase {
  code?: XmlElem<string>;
  question?: XmlElem<string>;
  answer?: XmlElem<string>;
  date?: XmlElem<Date>;
  normative_date?: XmlElem<Date>;
  answer_date?: XmlElem<Date>;
  expert_id?: XmlElem<number>;
  status?: XmlElem<boolean>;
  is_faq?: XmlElem<boolean>;
  is_disclosed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  question_file_id?: XmlElem<number>;
  answer_file_id?: XmlElem<number>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ExpertQuestionView>;
}

type ExpertQuestionDocument = XmlDocument<ExpertQuestionTopElem>;
