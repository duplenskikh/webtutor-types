type ExpenseItemDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ExpenseItemDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ExpenseItemDocument = XmlDocument & {
  TopElem: ExpenseItemDocumentTopElem;
  expense_item: ExpenseItemDocumentTopElem;
  DocDesc(): unknown;
};
