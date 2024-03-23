type CovenantCatalogDocumentTopElem = XmlTopElem &
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
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.covenant_status_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
