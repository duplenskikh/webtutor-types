interface KnowledgeProfileKnowledgePart {
  knowledge_part_id?: XmlElem<number>;
  name?: XmlElem<string>;
  target_level_id?: XmlElem<string>;
  target_level_index?: XmlElem<number>;
  target_level_name?: XmlElem<string>;
}

interface KnowledgeProfileView {
  selector?: XmlElem<string>;
}

interface KnowledgeProfileTopElem extends XmlTopElem<KnowledgeProfileDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  knowledge_parts?: XmlMultiElem<KnowledgeProfileKnowledgePart>;
  view?: XmlElem<KnowledgeProfileView>;
}

type KnowledgeProfileDocument = XmlDocument<KnowledgeProfileTopElem>;
