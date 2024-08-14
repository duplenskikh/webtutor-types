interface WikiBaseDocumentBaseWikiArticleType {
  /** Название */
  name: XmlElem<string | null>;
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
}

interface WikiBaseDocumentWikiArticleType extends FuncManagersBase {
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
  /** Требует подтверждения */
  need_confirm: XmlElem<boolean>;
  free_access_edit: XmlElem<boolean>;
  exclude_from_tree: XmlElem<boolean>;
  all_managers_can_confirm: XmlElem<boolean>;
}

type WikiBaseDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
FuncManagersBase &
KnowledgePartsBase & {
  Doc: WikiBaseDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  wiki_base_type_id: XmlElem<string | null, typeof common.wiki_base_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.wiki_base_statuses>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  base_wiki_article_types: XmlMultiElem<WikiBaseDocumentBaseWikiArticleType | null>;
  wiki_article_types: XmlMultiElem<WikiBaseDocumentWikiArticleType | null>;
  /** Репозиторий */
  repositorium_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
  requires_comment: XmlElem<boolean>;
  free_access_edit: XmlElem<boolean>;
  copy_access_in_new_article: XmlElem<boolean>;
  /** Описание */
  text_area: XmlElem<string | null>;
  process_embedding: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type WikiBaseDocument = XmlDocument & {
  TopElem: WikiBaseDocumentTopElem;
  wiki_base: WikiBaseDocumentTopElem;
  DocDesc(): string;
};
