type AccountDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  Doc: AccountDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  balance: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  status: XmlElem<string, typeof common.account_status_types>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type AccountDocument = XmlDocument & {
  TopElem: AccountDocumentTopElem;
  account: AccountDocumentTopElem;
  DocDesc(): unknown;
};
