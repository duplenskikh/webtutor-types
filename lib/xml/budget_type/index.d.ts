interface BudgetTypeTopElem extends XmlTopElem<BudgetTypeDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type BudgetTypeDocument = XmlDocument<BudgetTypeTopElem>;
