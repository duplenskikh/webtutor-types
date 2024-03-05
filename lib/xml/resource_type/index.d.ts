type ResourceTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ResourceTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
  access: XmlElem<AccessDocBase>;
};

type ResourceTypeDocument = XmlDocument & {
  TopElem: ResourceTypeDocumentTopElem;
};
