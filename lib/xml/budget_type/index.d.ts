type BudgetTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: BudgetTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type BudgetTypeDocument = XmlDocument & {
  TopElem: BudgetTypeDocumentTopElem;
  budget_type: BudgetTypeDocumentTopElem;
  DocDesc(): string;
};
