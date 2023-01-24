type CovenantCatalogDocumentTopElem = XmlTopElem & { Doc: CovenantCatalogDocument } & 
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  close_date: XmlElem<Date>;
  period_work: XmlElem<number>;
  proc_pay_bank: XmlElem<number>;
  proc_pay_collab: XmlElem<number>;
  proc_deduct: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  education_method_id: XmlElem<number>;
  event_id: XmlElem<number>;
  status_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CovenantCatalogDocument = XmlDocument & { TopElem: CovenantCatalogDocumentTopElem; };
