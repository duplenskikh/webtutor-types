interface GoodDocumentCost {
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  sum: XmlElem<number | null>;
  limit: XmlElem<number | null>;
}

type GoodDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  Doc: GoodDocument;
  good_type_id: XmlElem<number | null, GoodTypeCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  state_id: XmlElem<string, typeof common.good_states>;
  is_cant_chose: XmlElem<boolean>;
  costs: XmlMultiElem<GoodDocumentCost | null>;
  cost_desc(): unknown;
  bonus_shop_cost(): number;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type GoodDocument = XmlDocument & {
  TopElem: GoodDocumentTopElem;
  good: GoodDocumentTopElem;
  DocDesc(): string;
};
