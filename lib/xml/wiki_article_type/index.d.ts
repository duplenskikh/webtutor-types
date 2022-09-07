type WikiArticleTypeDocumentTopElem = XmlTopElem & { Doc: WikiArticleTypeDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
}

type WikiArticleTypeDocument = XmlDocument & {
  TopElem: WikiArticleTypeDocumentTopElem;
};
