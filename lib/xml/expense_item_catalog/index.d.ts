type ExpenseItemCatalogDocumentTopElem = XmlTopElem & { Doc: ExpenseItemCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ExpenseItemCatalogDocument = XmlDocument & { TopElem: ExpenseItemCatalogDocumentTopElem; };
