type KnowledgePartTypeDocumentTopElem = XmlTopElem & { Doc: KnowledgePartTypeDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type KnowledgePartTypeDocument = XmlDocument & {
  TopElem: KnowledgePartTypeDocumentTopElem;
};
