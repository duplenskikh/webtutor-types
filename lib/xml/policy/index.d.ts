type PolicyDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase & {
  Doc: PolicyDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  policy_type_id: XmlElem<number | null, PolicyTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.budget_state_types>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PolicyDocument = XmlDocument & {
  TopElem: PolicyDocumentTopElem;
  policy: PolicyDocumentTopElem;
};
