type ResourceTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ResourceTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ResourceTypeDocument = XmlDocument & {
  TopElem: ResourceTypeDocumentTopElem;
  resource_type: ResourceTypeDocumentTopElem;
  DocDesc(): string;
};
