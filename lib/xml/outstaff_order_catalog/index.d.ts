type OutstaffOrderCatalogDocumentTopElem = XmlTopElem & { Doc: OutstaffOrderCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  position_common_id: XmlElem<number>;
  region_id: XmlElem<number>;
  agreement_person_id: XmlElem<number>;
  cost_hour: XmlElem<number>;
  cost_sum: XmlElem<number>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OutstaffOrderCatalogDocument = XmlDocument & { TopElem: OutstaffOrderCatalogDocumentTopElem; };
