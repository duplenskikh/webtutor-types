interface KnowledgeProfileDocumentKnowledgePart {
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  target_level_id: XmlElem<string | null>;
  target_level_index: XmlElem<number | null>;
  target_level_name: XmlElem<string | null>;
}

type KnowledgeProfileDocumentTopElem = XmlTopElem & {
  Doc: KnowledgeProfileDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  knowledge_parts: XmlMultiElem<KnowledgeProfileDocumentKnowledgePart | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type KnowledgeProfileDocument = XmlDocument & {
  TopElem: KnowledgeProfileDocumentTopElem;
  knowledge_profile: KnowledgeProfileDocumentTopElem;
  DocDesc(): string;
};
