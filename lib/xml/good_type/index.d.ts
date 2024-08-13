type GoodTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: GoodTypeDocument;
  desc: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type GoodTypeDocument = XmlDocument & {
  TopElem: GoodTypeDocumentTopElem;
  good_type: GoodTypeDocumentTopElem;
  DocDesc(): string;
};
