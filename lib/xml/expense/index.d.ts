type ExpenseDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: ExpenseDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Дата создания */
  expense_create_date: XmlElem<Date | null>;
  /** Сформирован */
  is_formed: XmlElem<boolean | null>;
  payment_plan_date: XmlElem<Date | null>;
  /** Оплачен */
  is_paid: XmlElem<boolean | null>;
  /** Дата оплаты */
  payment_fact_date: XmlElem<Date | null>;
  bad_debt: XmlElem<boolean | null>;
  sent_date: XmlElem<Date | null>;
  sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  recipient: XmlElem<string | null>;
  consignment_document_number: XmlElem<string | null>;
  sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  back_sent_type: XmlElem<string | null, typeof common.document_sent_types>;
  back_sent_messenger_service_id: XmlElem<number | null, MessengerServiceCatalogDocumentTopElem>;
  /** Получено */
  is_received: XmlElem<boolean | null>;
  received_date: XmlElem<Date | null>;
  /** Комментарий */
  docs_comment: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExpenseDocument = XmlDocument & {
  TopElem: ExpenseDocumentTopElem;
  expense: ExpenseDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
