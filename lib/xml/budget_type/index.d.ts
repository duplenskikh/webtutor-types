type BudgetTypeDocumentTopElem = XmlTopElem & { Doc: BudgetTypeDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type BudgetTypeDocument = XmlDocument & { TopElem: BudgetTypeDocumentTopElem; };
