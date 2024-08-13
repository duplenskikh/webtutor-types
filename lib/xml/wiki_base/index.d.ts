interface WikiBaseDocumentBaseWikiArticleType {
  name: XmlElem<string | null>;
  base_wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
}

interface WikiBaseDocumentWikiArticleType extends FuncManagersBase {
  wiki_article_type_id: XmlElem<number | null, WikiArticleTypeCatalogDocumentTopElem>;
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
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  wiki_base_type_id: XmlElem<string | null, typeof common.wiki_base_types>;
  status: XmlElem<string | null, typeof common.wiki_base_statuses>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  base_wiki_article_types: XmlMultiElem<WikiBaseDocumentBaseWikiArticleType | null>;
  wiki_article_types: XmlMultiElem<WikiBaseDocumentWikiArticleType | null>;
  repositorium_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
  requires_comment: XmlElem<boolean>;
  free_access_edit: XmlElem<boolean>;
  copy_access_in_new_article: XmlElem<boolean>;
  text_area: XmlElem<string | null>;
  process_embedding: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type WikiBaseDocument = XmlDocument & {
  TopElem: WikiBaseDocumentTopElem;
  wiki_base: WikiBaseDocumentTopElem;
  DocDesc(): string;
};
