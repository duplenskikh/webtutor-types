type KnowledgePartTypeDocumentTopElem = XmlTopElem & {
  Doc: KnowledgePartTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type KnowledgePartTypeDocument = XmlDocument & {
  TopElem: KnowledgePartTypeDocumentTopElem;
  knowledge_part_type: KnowledgePartTypeDocumentTopElem;
};
