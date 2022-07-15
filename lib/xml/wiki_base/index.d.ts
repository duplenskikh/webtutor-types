interface WikiBaseBaseWikiArticleType {
  name?: XmlElem<string>;
  base_wiki_article_type_id?: XmlElem<number>;
}

interface WikiBaseWikiArticleType extends FuncManagersBase {
  wiki_article_type_id?: XmlElem<number>;
  need_confirm?: XmlElem<boolean>;
  free_access_edit?: XmlElem<boolean>;
  exclude_from_tree?: XmlElem<boolean>;
  all_managers_can_confirm?: XmlElem<boolean>;
}

interface WikiBaseView extends DescBase {
}

interface WikiBaseTopElem extends XmlTopElem<WikiBaseDocument>, FileListBase, CustomElemsBase, FuncManagersBase, KnowledgePartsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  repositorium_id?: XmlElem<number>;
  requires_comment?: XmlElem<boolean>;
  free_access_edit?: XmlElem<boolean>;
  copy_access_in_new_article?: XmlElem<boolean>;
  text_area?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  base_wiki_article_types?: XmlMultiElem<WikiBaseBaseWikiArticleType>;
  wiki_article_types?: XmlMultiElem<WikiBaseWikiArticleType>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<WikiBaseView>;
}

type WikiBaseDocument = XmlDocument<WikiBaseTopElem>;
