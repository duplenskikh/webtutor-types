type BudgetTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: BudgetTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type BudgetTypeDocument = XmlDocument & {
  TopElem: BudgetTypeDocumentTopElem;
  budget_type: BudgetTypeDocumentTopElem;
  DocDesc(): unknown;
};
