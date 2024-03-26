type PolicyDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase & {
  Doc: PolicyDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string>;
  policy_type_id: XmlElem<number, PolicyTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.budget_state_types>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type PolicyDocument = XmlDocument & {
  TopElem: PolicyDocumentTopElem;
  policy: PolicyDocumentTopElem;
};
