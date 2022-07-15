interface BasketGood {
  good_id?: XmlElem<number>;
  number?: XmlElem<number>;
  reserved_date?: XmlElem<Date>;
}

interface BasketTopElem extends XmlTopElem<BasketDocument>, PersonFillingBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  goods?: XmlMultiElem<BasketGood>;
}

type BasketDocument = XmlDocument<BasketTopElem>;
