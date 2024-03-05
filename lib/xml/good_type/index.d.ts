type GoodTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: GoodTypeDocument;
  desc: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type GoodTypeDocument = XmlDocument & {
  TopElem: GoodTypeDocumentTopElem;
};
