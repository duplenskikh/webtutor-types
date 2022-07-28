interface OrderDocumentGoodGoodInstance {
  good_instance_id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  cost: XmlElem<number>;
  reserved_date: XmlElem<Date>;
}
interface OrderDocumentGood {
  good_id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  number: XmlElem<number>;
  reserved_date: XmlElem<Date>;
  good_instances: XmlMultiElem<OrderDocumentGoodGoodInstance>;
  delivery_type: XmlElem<string>;
  cost: XmlElem<number>;
  sum(): unknown;
  add_good_instance(): unknown;
}

type OrderDocumentTopElem = XmlTopElem & { Doc: OrderDocument } & 
  PersonFillingBase &
  FileListBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  person_id: XmlElem<number>;
  goods: XmlMultiElem<OrderDocumentGood>;
  sum(): unknown;
  currency_type_id: XmlElem<string>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type OrderDocument = XmlDocument & { TopElem: OrderDocumentTopElem; };
