type KnowledgeClassifierDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KnowledgeClassifierDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
};

type KnowledgeClassifierDocument = XmlDocument & {
  TopElem: KnowledgeClassifierDocumentTopElem;
  knowledge_classifier: KnowledgeClassifierDocumentTopElem;
  DocDesc(): unknown;
};
