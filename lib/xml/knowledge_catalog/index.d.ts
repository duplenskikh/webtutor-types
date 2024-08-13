type KnowledgeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null>;
  /** Классификатор */
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  /** Родительское значение */
  parent_object_id: XmlElem<number | null>;
  parent_catalog: XmlElem<string | null>;
  has_experts: XmlElem<boolean | null>;
  OnBuild(): void;
  MatchDoc(): unknown;
};
