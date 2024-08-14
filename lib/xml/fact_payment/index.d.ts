type FactPaymentDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: FactPaymentDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Клиент */
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_legal: XmlElem<string | null>;
  provider_legal: XmlElem<string | null>;
  agent_legal: XmlElem<string | null>;
  client_legal_name: XmlElem<string | null>;
  provider_legal_name: XmlElem<string | null>;
  agent_legal_name: XmlElem<string | null>;
  /** Валюта */
  cost_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  /** Сумма */
  cost_value: XmlElem<number | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Счет */
  expense_id: XmlElem<number | null, ExpenseCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type FactPaymentDocument = XmlDocument & {
  TopElem: FactPaymentDocumentTopElem;
  fact_payment: FactPaymentDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
