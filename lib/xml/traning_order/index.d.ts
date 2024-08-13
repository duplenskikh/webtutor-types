type TraningOrderDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TraningOrderDocument;
  /** Номер */
  number: XmlElem<string | null>;
  /** Установка для приказов по умолчанию */
  order_type_id: XmlElem<number | null, OrderTypeCatalogDocumentTopElem>;
  /** Дата приказа */
  date: XmlElem<Date | null>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  /** Обучающая организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string | null>;
  /** Этапы оплаты */
  pay_phase_id: XmlElem<number | null, PayPhaseCatalogDocumentTopElem>;
  /** Платеж */
  expense_id: XmlElem<string | null>;
  /** Сумма */
  cost: XmlElem<number | null>;
  /** Валюта */
  currency: XmlElem<string | null, typeof lists.currency_types>;
  /** Статус */
  status: XmlElem<string | null, typeof common.traning_order_states>;
  /** Подписывающий приказ */
  signing_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Ответственный за платеж */
  responsible_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Исполнитель */
  performer_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type TraningOrderDocument = XmlDocument & {
  TopElem: TraningOrderDocumentTopElem;
  traning_order: TraningOrderDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
