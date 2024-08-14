type OrderTypeDocumentTopElem = XmlTopElem & {
  Doc: OrderTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Текущий номер */
  number: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Префикс */
  prefix: XmlElem<string | null>;
  /** Суффикс */
  suffix: XmlElem<string | null>;
  /** Использовать во вновь формируемых приказах */
  default_flag: XmlElem<boolean | null>;
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

type OrderTypeDocument = XmlDocument & {
  TopElem: OrderTypeDocumentTopElem;
  order_type: OrderTypeDocumentTopElem;
  DocDesc(): string;
};
