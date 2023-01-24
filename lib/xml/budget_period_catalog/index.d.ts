type BudgetPeriodCatalogDocumentTopElem = XmlTopElem & { Doc: BudgetPeriodCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  period_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BudgetPeriodCatalogDocument = XmlDocument & { TopElem: BudgetPeriodCatalogDocumentTopElem; };
