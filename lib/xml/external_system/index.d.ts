interface ExternalSystemDocumentKnowledgeUrlPair {
  code?: XmlElem<string>;
  knowledge_part_id?: XmlElem<number>;
}

type ExternalSystemDocumentTopElem = XmlTopElem & { Doc: ExternalSystemDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  knowledge_url_pairs?: XmlMultiElem<ExternalSystemDocumentKnowledgeUrlPair>;
  anonymous_user_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ExternalSystemDocument = XmlDocument & { TopElem: ExternalSystemDocumentTopElem; };
