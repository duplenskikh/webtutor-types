interface OrderDocumentGoodGoodInstance {
  good_instance_id: XmlElem<number, GoodInstanceCatalogDocumentTopElem>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  cost: XmlElem<number>;
  reserved_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.good_instance_status_types>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
}

interface OrderDocumentGood {
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  number: XmlElem<number>;
  reserved_date: XmlElem<Date>;
  good_instances: XmlMultiElem<OrderDocumentGoodGoodInstance>;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  cost: XmlElem<number>;
  sum(): unknown;
  add_good_instance(goodInstanceId: number): unknown;
  status: XmlElem<string, typeof common.order_status_types>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
}

type OrderDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: OrderDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.order_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  goods: XmlMultiElem<OrderDocumentGood>;
  sum(): unknown;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  issue_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  calculate_status(): unknown;
};

type OrderDocument = XmlDocument & {
  TopElem: OrderDocumentTopElem;
  order: OrderDocumentTopElem;
  DocDesc(): unknown;
};
