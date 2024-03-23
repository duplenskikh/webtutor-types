interface GoodDocumentCost {
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  sum: XmlElem<number>;
  limit: XmlElem<number>;
}

type GoodDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  Doc: GoodDocument;
  good_type_id: XmlElem<number, GoodTypeCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  state_id: XmlElem<string, typeof common.good_states>;
  is_cant_chose: XmlElem<boolean>;
  costs: XmlMultiElem<GoodDocumentCost>;
  cost_desc(): unknown;
  bonus_shop_cost(): unknown;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
};

type GoodDocument = XmlDocument & {
  TopElem: GoodDocumentTopElem;
  good: GoodDocumentTopElem;
  DocDesc(): string;
};
