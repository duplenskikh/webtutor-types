interface WikiArticleDocumentAuthor extends PersonFillingBase {
  /** Автор */
  author_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Тип */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface WikiArticleDocumentAddingObjectsWikiArticleCommunication {
  id: XmlElem<string>;
  wiki_article_communication_id: XmlElem<number | null, WikiArticleCommunicationCatalogDocumentTopElem>;
  wiki_article_comm_type_id: XmlElem<number | null, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  base_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  child_wiki_article_id: XmlElem<number | null, WikiArticleCatalogDocumentTopElem>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
}

interface WikiArticleDocumentAddingObjects {
  need_adding: XmlElem<boolean | null>;
  wiki_article_communications: XmlMultiElem<WikiArticleDocumentAddingObjectsWikiArticleCommunication | null>;
}

interface WikiArticleDocumentQuestionCondition {
  grading_option_id: XmlElem<string, typeof common.grading_option_types>;
  sentence_option_id: XmlElem<string, typeof common.sentence_option_types>;
  value: XmlElem<string | null>;
}

interface WikiArticleDocumentQuestionEntry {
  id: XmlElem<string | null>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Правильный ответ */
  is_correct: XmlElem<boolean | null>;
}

interface WikiArticleDocumentQuestion {
  /** Вопрос */
  id: XmlElem<string | null>;
  is_custom: XmlElem<boolean | null>;
  /** Вопрос */
  item_id: XmlElem<number | null>;
  /** Тип вопроса */
  type_id: XmlElem<string | null, typeof common.acquaint_question_types>;
  /** Заголовок */
  title: XmlElem<string | null>;
  /** Правильный ответ */
  correct_answer: XmlElem<string | null>;
  conditions: XmlMultiElem<WikiArticleDocumentQuestionCondition | null>;
  /** Варианты ответов */
  entries: XmlMultiElem<WikiArticleDocumentQuestionEntry | null>;
}

interface WikiArticleDocumentAcquaintGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

type WikiArticleDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
CatalogListBase &
KnowledgePartsBase &
ChangeHashBase & {
  Doc: WikiArticleDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  wiki_base_id: XmlElem<number | null, WikiBaseCatalogDocumentTopElem>;
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  content_type: XmlElem<string | null>;
  /** Статус */
  status_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  acquaint_type_id: XmlElem<string | null, typeof common.acquaint_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата публикации */
  publicate_date: XmlElem<Date | null>;
  critical_publicate_date: XmlElem<Date | null>;
  critical_change: XmlElem<boolean | null>;
  /** Авторы */
  authors: XmlMultiElem<WikiArticleDocumentAuthor | null>;
  adding_objects: XmlElem<WikiArticleDocumentAddingObjects | null>;
  /** Вопросы */
  questions: XmlMultiElem<WikiArticleDocumentQuestion | null>;
  acquaint_groups: XmlMultiElem<WikiArticleDocumentAcquaintGroup | null>;
  /** Аннотация */
  annotation: XmlElem<string | null>;
  longread: XmlElem<string | null>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type WikiArticleDocument = XmlDocument & {
  TopElem: WikiArticleDocumentTopElem;
  wiki_article: WikiArticleDocumentTopElem;
  DocDesc(): string;
};
