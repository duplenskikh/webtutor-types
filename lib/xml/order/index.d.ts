interface OrderDocumentGoodGoodInstance {
  good_instance_id: XmlElem<number | null, GoodInstanceCatalogDocumentTopElem>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Стоимость */
  cost: XmlElem<number>;
  /** Дата резервирования */
  reserved_date: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string, typeof common.good_instance_status_types>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
}

interface OrderDocumentGood {
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Количество */
  number: XmlElem<number>;
  /** Дата резервирования */
  reserved_date: XmlElem<Date | null>;
  good_instances: XmlMultiElem<OrderDocumentGoodGoodInstance | null>;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  /** Стоимость */
  cost: XmlElem<number>;
  /** Общая стоимость */
  sum(): number;
  add_good_instance(goodInstanceId: number): unknown;
  /** Статус */
  status: XmlElem<string, typeof common.order_status_types>;
  /** Заявка */
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
}

type OrderDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: OrderDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string, typeof common.order_status_types>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  goods: XmlMultiElem<OrderDocumentGood | null>;
  /** Общая стоимость */
  sum(): number;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Дата формирования */
  formed_date: XmlElem<Date | null>;
  /** Дата оплаты */
  paid_date: XmlElem<Date | null>;
  /** Дата выдачи */
  issue_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  calculate_status(): unknown;
};

type OrderDocument = XmlDocument & {
  TopElem: OrderDocumentTopElem;
  order: OrderDocumentTopElem;
  DocDesc(): string;
};
