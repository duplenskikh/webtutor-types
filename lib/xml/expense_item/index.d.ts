type ExpenseItemDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ExpenseItemDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExpenseItemDocument = XmlDocument & {
  TopElem: ExpenseItemDocumentTopElem;
  expense_item: ExpenseItemDocumentTopElem;
  DocDesc(): string;
};
