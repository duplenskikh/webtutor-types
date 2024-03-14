type KnowledgeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  knowledge_classifier_id: XmlElem<number, KnowledgeClassifierCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number>;
  parent_catalog: XmlElem<string>;
  has_experts: XmlElem<boolean>;
  OnBuild(): unknown;
  MatchDoc(): unknown;
};
