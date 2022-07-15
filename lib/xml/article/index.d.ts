interface ArticleViewFilter extends AuFtFilter {
}

interface ArticleView extends DescBase {
  filter?: XmlElem<ArticleViewFilter>;
}

interface ArticleTopElem extends XmlTopElem<ArticleDocument>, CatalogListBase, FileListBase, KnowledgePartsBase, KnowledgePartsBaseOld, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  book_id?: XmlElem<number>;
  library_material_id?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ArticleView>;
}

type ArticleDocument = XmlDocument<ArticleTopElem>;
