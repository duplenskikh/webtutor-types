type KnowledgePartLevelDocumentTopElem = XmlTopElem & {
  Doc: KnowledgePartLevelDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type KnowledgePartLevelDocument = XmlDocument & {
  TopElem: KnowledgePartLevelDocumentTopElem;
  knowledge_part_level: KnowledgePartLevelDocumentTopElem;
};
