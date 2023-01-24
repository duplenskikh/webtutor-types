type AccountCatalogDocumentTopElem = XmlTopElem & { Doc: AccountCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  balance: XmlElem<number>;
  status: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AccountCatalogDocument = XmlDocument & { TopElem: AccountCatalogDocumentTopElem; };
