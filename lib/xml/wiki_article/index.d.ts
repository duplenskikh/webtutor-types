interface WikiArticleDocumentAuthor extends PersonFillingBase {
  author_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface WikiArticleDocumentAddingObjectsWikiArticleCommunication {
  id: XmlElem<string>;
  wiki_article_communication_id: XmlElem<number, WikiArticleCommunicationCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number, WikiArticleCatalogDocumentTopElem>;
  position: XmlElem<number>;
}

interface WikiArticleDocumentAddingObjects {
  need_adding: XmlElem<boolean>;
  wiki_article_communications: XmlMultiElem<WikiArticleDocumentAddingObjectsWikiArticleCommunication>;
}

interface WikiArticleDocumentQuestionCondition {
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
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
  type_id: XmlElem<string, typeof common.acquaint_question_types>;
  title: XmlElem<string>;
  correct_answer: XmlElem<string>;
  conditions: XmlMultiElem<WikiArticleDocumentQuestionCondition>;
  entries: XmlMultiElem<WikiArticleDocumentQuestionEntry>;
}

interface WikiArticleDocumentAcquaintGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

type WikiArticleDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
CatalogListBase &
KnowledgePartsBase &
ChangeHashBase & {
  Doc: WikiArticleDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  wiki_base_id: XmlElem<number, WikiBaseCatalogDocumentTopElem>;
  wiki_article_type_id: XmlElem<number, WikiArticleTypeCatalogDocumentTopElem>;
  content_type: XmlElem<string>;
  status_id: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  acquaint_type_id: XmlElem<string, typeof common.acquaint_types>;
  create_date: XmlElem<Date>;
  publicate_date: XmlElem<Date>;
  critical_publicate_date: XmlElem<Date>;
  critical_change: XmlElem<boolean>;
  authors: XmlMultiElem<WikiArticleDocumentAuthor>;
  adding_objects: XmlElem<WikiArticleDocumentAddingObjects>;
  questions: XmlMultiElem<WikiArticleDocumentQuestion>;
  acquaint_groups: XmlMultiElem<WikiArticleDocumentAcquaintGroup>;
  annotation: XmlElem<string>;
  longread: XmlElem<string>;
  text_area: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type WikiArticleDocument = XmlDocument & {
  TopElem: WikiArticleDocumentTopElem;
  wiki_article: WikiArticleDocumentTopElem;
  DocDesc(): string;
};
