interface KnowledgeProfileDocumentKnowledgePart {
  knowledge_part_id: XmlElem<number>;
  name: XmlElem<string>;
  target_level_id: XmlElem<string>;
  target_level_index: XmlElem<number>;
  target_level_name: XmlElem<string>;
}

type KnowledgeProfileDocumentTopElem = XmlTopElem & { Doc: KnowledgeProfileDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  knowledge_parts: XmlMultiElem<KnowledgeProfileDocumentKnowledgePart>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
}

type KnowledgeProfileDocument = XmlDocument & { TopElem: KnowledgeProfileDocumentTopElem; };
