type KnowledgeClassifierDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KnowledgeClassifierDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
};

type KnowledgeClassifierDocument = XmlDocument & {
  TopElem: KnowledgeClassifierDocumentTopElem;
  knowledge_classifier: KnowledgeClassifierDocumentTopElem;
  DocDesc(): string;
};
