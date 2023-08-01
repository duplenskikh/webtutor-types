type GoodTypeDocumentTopElem = XmlTopElem & { Doc: GoodTypeDocument } &
ObjectCodeNameBase & {
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type GoodTypeDocument = XmlDocument & {
  TopElem: GoodTypeDocumentTopElem;
};
