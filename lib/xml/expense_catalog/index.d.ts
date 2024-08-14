type ExpenseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  pay_stage_id: XmlElem<number | null, PayStageCatalogDocumentTopElem>;
  /** Стоимость */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  number: XmlElem<string | null>;
  expense_create_date: XmlElem<Date | null>;
  is_formed: XmlElem<boolean | null>;
  payment_plan_date: XmlElem<Date | null>;
  /** Оплачен */
  is_paid: XmlElem<boolean | null>;
  /** Дата оплаты */
  payment_fact_date: XmlElem<Date | null>;
  bad_debt: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  /** Дата отправки */
  sent_date: XmlElem<Date | null>;
  /** Получатель */
  recipient: XmlElem<string | null>;
  consignment_document_number: XmlElem<string | null>;
  is_received: XmlElem<boolean | null>;
  received_date: XmlElem<Date | null>;
  docs_comment: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
