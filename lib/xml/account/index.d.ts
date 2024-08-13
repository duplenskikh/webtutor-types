type AccountDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  Doc: AccountDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  balance: XmlElem<number>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  status: XmlElem<string | null, typeof common.account_status_types>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AccountDocument = XmlDocument & {
  TopElem: AccountDocumentTopElem;
  account: AccountDocumentTopElem;
  DocDesc(): string;
};
