type ExpenseItemDocumentTopElem = XmlTopElem & { Doc: ExpenseItemDocument } &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ExpenseItemDocument = XmlDocument & {
  TopElem: ExpenseItemDocumentTopElem;
};
