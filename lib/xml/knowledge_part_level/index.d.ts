type KnowledgePartLevelDocumentTopElem = XmlTopElem & {
  Doc: KnowledgePartLevelDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type KnowledgePartLevelDocument = XmlDocument & {
  TopElem: KnowledgePartLevelDocumentTopElem;
  knowledge_part_level: KnowledgePartLevelDocumentTopElem;
};
