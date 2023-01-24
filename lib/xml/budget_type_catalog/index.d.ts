type BudgetTypeCatalogDocumentTopElem = XmlTopElem & { Doc: BudgetTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BudgetTypeCatalogDocument = XmlDocument & { TopElem: BudgetTypeCatalogDocumentTopElem; };
