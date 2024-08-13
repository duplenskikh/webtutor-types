interface OrderDocumentGoodGoodInstance {
  good_instance_id: XmlElem<number | null, GoodInstanceCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  cost: XmlElem<number>;
  reserved_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.good_instance_status_types>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
}

interface OrderDocumentGood {
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  number: XmlElem<number>;
  reserved_date: XmlElem<Date | null>;
  good_instances: XmlMultiElem<OrderDocumentGoodGoodInstance | null>;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  cost: XmlElem<number>;
  sum(): number;
  add_good_instance(goodInstanceId: number): unknown;
  status: XmlElem<string, typeof common.order_status_types>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
}

type OrderDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: OrderDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string, typeof common.order_status_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  goods: XmlMultiElem<OrderDocumentGood | null>;
  sum(): number;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  formed_date: XmlElem<Date | null>;
  paid_date: XmlElem<Date | null>;
  issue_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  calculate_status(): unknown;
};

type OrderDocument = XmlDocument & {
  TopElem: OrderDocumentTopElem;
  order: OrderDocumentTopElem;
  DocDesc(): string;
};
