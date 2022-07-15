interface WikiArticleTypeTopElem extends XmlTopElem<WikiArticleTypeDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
}

type WikiArticleTypeDocument = XmlDocument<WikiArticleTypeTopElem>;
