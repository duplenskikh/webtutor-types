interface OrderGoodGoodInstance {
  good_instance_id?: XmlElem<number>;
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  cost?: XmlElem<number>;
  reserved_date?: XmlElem<Date>;
}

interface OrderGood {
  good_id?: XmlElem<number>;
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  number?: XmlElem<number>;
  reserved_date?: XmlElem<Date>;
  delivery_type?: XmlElem<string>;
  cost?: XmlElem<number>;
  hier_expanded?: XmlElem<boolean>;
  good_instances?: XmlMultiElem<OrderGoodGoodInstance>;
  sum?(): any;
  add_good_instance?(): any;
}

interface OrderTopElem extends XmlTopElem<OrderDocument>, PersonFillingBase, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status?: XmlElem<string>;
  person_id?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  formed_date?: XmlElem<Date>;
  paid_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  goods?: XmlMultiElem<OrderGood>;
  sum?(): any;
}

type OrderDocument = XmlDocument<OrderTopElem>;
