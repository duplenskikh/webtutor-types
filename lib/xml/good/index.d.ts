interface GoodDocumentCost {
  currency_type_id: XmlElem<string>;
  sum: XmlElem<number>;
}

type GoodDocumentTopElem = XmlTopElem & { Doc: GoodDocument } &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  good_type_id: XmlElem<number>;
  costs: XmlMultiElem<GoodDocumentCost>;
  cost_desc(): unknown;
  bonus_shop_cost?(): number;
  delivery_type: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
};

type GoodDocument = XmlDocument & {
  TopElem: GoodDocumentTopElem;
};
