interface WikiArticleCommunicationView extends DescBase {
}

interface WikiArticleCommunicationTopElem extends XmlTopElem<WikiArticleCommunicationDocument>, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  wiki_article_communication_type_id?: XmlElem<number>;
  wiki_article_comm_type_id?: XmlElem<number>;
  base_wiki_article_id?: XmlElem<number>;
  child_wiki_article_id?: XmlElem<number>;
  position?: XmlElem<number>;
  text_area?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<WikiArticleCommunicationView>;
  name?(): any;
}

type WikiArticleCommunicationDocument = XmlDocument<WikiArticleCommunicationTopElem>;
