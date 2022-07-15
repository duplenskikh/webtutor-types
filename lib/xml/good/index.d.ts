interface GoodCost {
  currency_type_id?: XmlElem<string>;
  sum?: XmlElem<number>;
}

interface GoodTopElem extends XmlTopElem<GoodDocument>, ObjectCodeNameBase, FileListBase, CustomElemsBase {
  good_type_id?: XmlElem<number>;
  bonus_shop_cost?: XmlElem<number>;
  delivery_type?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  costs?: XmlMultiElem<GoodCost>;
  cost_desc?(): any;
}

type GoodDocument = XmlDocument<GoodTopElem>;
