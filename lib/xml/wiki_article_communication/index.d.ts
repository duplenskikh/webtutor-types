type WikiArticleCommunicationDocumentTopElem = XmlTopElem & { Doc: WikiArticleCommunicationDocument } & 
  FileListBase &
  CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?(): unknown;
  resource_id?: XmlElem<number>;
  wiki_article_communication_type_id?: XmlElem<number>;
  wiki_article_comm_type_id?: XmlElem<number>;
  base_wiki_article_id?: XmlElem<number>;
  child_wiki_article_id?: XmlElem<number>;
  position?: XmlElem<number>;
  text_area?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
}

type WikiArticleCommunicationDocument = XmlDocument & { TopElem: WikiArticleCommunicationDocumentTopElem; };
