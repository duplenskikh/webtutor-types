interface WikiArticleCommunicationTypeTopElem extends XmlTopElem<WikiArticleCommunicationTypeDocument>, FileListBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  wiki_communication_type_id?: XmlElem<string>;
  base_wiki_article_type_id?: XmlElem<number>;
  child_wiki_article_type_id?: XmlElem<number>;
  is_mandatory?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
}

type WikiArticleCommunicationTypeDocument = XmlDocument<WikiArticleCommunicationTypeTopElem>;
