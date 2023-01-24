type CareerPlanCatalogDocumentTopElem = XmlTopElem & { Doc: CareerPlanCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  status: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
}

type CareerPlanCatalogDocument = XmlDocument & { TopElem: CareerPlanCatalogDocumentTopElem; };
