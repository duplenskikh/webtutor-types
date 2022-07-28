type KnowledgePartLevelDocumentTopElem = XmlTopElem & { Doc: KnowledgePartLevelDocument } & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
}

type KnowledgePartLevelDocument = XmlDocument & { TopElem: KnowledgePartLevelDocumentTopElem; };
