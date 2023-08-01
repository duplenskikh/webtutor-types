interface WikiArticleDocumentAuthor extends PersonFillingBase {
  author_id: XmlElem<number>;
}

interface WikiArticleDocumentQuestionCondition {
  grading_option_id: XmlElem<string>;
  sentence_option_id: XmlElem<string>;
  value: XmlElem<string>;
}

interface WikiArticleDocumentQuestionEntry {
  id: XmlElem<string>;
  value: XmlElem<string>;
  is_correct: XmlElem<boolean>;
}
interface WikiArticleDocumentQuestion {
  id: XmlElem<string>;
  is_custom: XmlElem<boolean>;
  item_id: XmlElem<number>;
  type_id: XmlElem<string>;
  title: XmlElem<string>;
  correct_answer: XmlElem<string>;
  conditions: XmlMultiElem<WikiArticleDocumentQuestionCondition>;
  entries: XmlMultiElem<WikiArticleDocumentQuestionEntry>;
}

interface WikiArticleDocumentAcquaintGroup {
  group_id: XmlElem<number>;
}

type WikiArticleDocumentTopElem = XmlTopElem & { Doc: WikiArticleDocument } & 
FileListBase &
CustomElemsBase &
CatalogListBase &
KnowledgePartsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  wiki_base_id: XmlElem<number>;
  wiki_article_type_id: XmlElem<number>;
  status_id: XmlElem<string>;
  acquaint_type_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  publicate_date: XmlElem<Date>;
  critical_publicate_date: XmlElem<Date>;
  critical_change: XmlElem<boolean>;
  authors: XmlMultiElem<WikiArticleDocumentAuthor>;
  questions: XmlMultiElem<WikiArticleDocumentQuestion>;
  acquaint_groups: XmlMultiElem<WikiArticleDocumentAcquaintGroup>;
  annotation: XmlElem<string>;
  text_area: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type WikiArticleDocument = XmlDocument & {
  TopElem: WikiArticleDocumentTopElem;
};
