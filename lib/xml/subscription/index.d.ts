type SubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SubscriptionDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Тип */
  type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  document_id: XmlElem<number | null>;
  /** Следить за изменениями в дочерних элементах */
  include_subdocs: XmlElem<boolean>;
  date_to: XmlElem<Date | null>;
  /** Дата последнего действия */
  date_last_action: XmlElem<Date | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type SubscriptionDocument = XmlDocument & {
  TopElem: SubscriptionDocumentTopElem;
  subscription: SubscriptionDocumentTopElem;
  DocDesc(): string;
};
