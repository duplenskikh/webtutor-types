type FactPaymentDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: FactPaymentDocument;
  name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_legal: XmlElem<string | null>;
  provider_legal: XmlElem<string | null>;
  agent_legal: XmlElem<string | null>;
  client_legal_name: XmlElem<string | null>;
  provider_legal_name: XmlElem<string | null>;
  agent_legal_name: XmlElem<string | null>;
  cost_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  cost_value: XmlElem<number | null>;
  date: XmlElem<Date | null>;
  expense_id: XmlElem<number | null, ExpenseCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type FactPaymentDocument = XmlDocument & {
  TopElem: FactPaymentDocumentTopElem;
  fact_payment: FactPaymentDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
