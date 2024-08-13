type KnowledgeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null>;
  parent_catalog: XmlElem<string | null>;
  has_experts: XmlElem<boolean | null>;
  OnBuild(): void;
  MatchDoc(): unknown;
};
