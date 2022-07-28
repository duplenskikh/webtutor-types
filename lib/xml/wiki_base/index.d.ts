interface WikiBaseDocumentBaseWikiArticleType {
  name?: XmlElem<string>;
  base_wiki_article_type_id?: XmlElem<number>;
}

interface WikiBaseDocumentWikiArticleType extends FuncManagersBase {
  wiki_article_type_id?: XmlElem<number>;
  need_confirm?: XmlElem<boolean>;
  free_access_edit?: XmlElem<boolean>;
  exclude_from_tree?: XmlElem<boolean>;
  all_managers_can_confirm?: XmlElem<boolean>;
}

type WikiBaseDocumentTopElem = XmlTopElem & { Doc: WikiBaseDocument } & 
  FileListBase &
  CustomElemsBase &
  FuncManagersBase &
  KnowledgePartsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  base_wiki_article_types?: XmlMultiElem<WikiBaseDocumentBaseWikiArticleType>;
  wiki_article_types?: XmlMultiElem<WikiBaseDocumentWikiArticleType>;
  repositorium_id?: XmlElem<number>;
  requires_comment?: XmlElem<boolean>;
  free_access_edit?: XmlElem<boolean>;
  copy_access_in_new_article?: XmlElem<boolean>;
  text_area?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
}

type WikiBaseDocument = XmlDocument & { TopElem: WikiBaseDocumentTopElem; };
