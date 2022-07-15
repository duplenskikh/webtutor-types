interface WikiArticleAuthor extends PersonFillingBase {
  author_id?: XmlElem<number>;
}

interface WikiArticleQuestionCondition {
  grading_option_id?: XmlElem<string>;
  sentence_option_id?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface WikiArticleQuestionEntriesEntry {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
  is_correct?: XmlElem<boolean>;
}

interface WikiArticleQuestion {
  id?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
  item_id?: XmlElem<number>;
  type_id?: XmlElem<string>;
  title?: XmlElem<string>;
  correct_answer?: XmlElem<string>;
  conditions?: XmlMultiElem<WikiArticleQuestionCondition>;
  entries?: XmlElem<WikiArticleQuestionEntriesEntry>;
}

interface WikiArticleAcquaintGroup {
  group_id?: XmlElem<number>;
}

interface WikiArticleAddingObjectsWikiArticleCommunication {
  id?: XmlElem<string>;
  wiki_article_communication_id?: XmlElem<number>;
  wiki_article_comm_type_id?: XmlElem<number>;
  base_wiki_article_id?: XmlElem<number>;
  child_wiki_article_id?: XmlElem<number>;
  position?: XmlElem<number>;
}

interface WikiArticleAddingObjects {
  need_adding?: XmlElem<boolean>;
  wiki_article_communications?: XmlMultiElem<WikiArticleAddingObjectsWikiArticleCommunication>;
}

interface WikiArticleView extends DescBase {
  set_article?: XmlElem<string>;
}

interface WikiArticleTopElem extends XmlTopElem<WikiArticleDocument>, FileListBase, CustomElemsBase, CatalogListBase, KnowledgePartsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  wiki_base_id?: XmlElem<number>;
  wiki_article_type_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  acquaint_type_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  publicate_date?: XmlElem<Date>;
  critical_publicate_date?: XmlElem<Date>;
  critical_change?: XmlElem<boolean>;
  annotation?: XmlElem<string>;
  text_area?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  authors?: XmlMultiElem<WikiArticleAuthor>;
  questions?: XmlMultiElem<WikiArticleQuestion>;
  acquaint_groups?: XmlMultiElem<WikiArticleAcquaintGroup>;
  adding_objects?: XmlElem<WikiArticleAddingObjects>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<WikiArticleView>;
}

type WikiArticleDocument = XmlDocument<WikiArticleTopElem>;
