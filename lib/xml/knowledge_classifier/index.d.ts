type KnowledgeClassifierDocumentTopElem = XmlTopElem & { Doc: KnowledgeClassifierDocument } & 
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
}

type KnowledgeClassifierDocument = XmlDocument & {
  TopElem: KnowledgeClassifierDocumentTopElem;
};
