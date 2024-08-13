type CovenantCatalogDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  close_date: XmlElem<Date | null>;
  period_work: XmlElem<number | null>;
  proc_pay_bank: XmlElem<number | null>;
  proc_pay_collab: XmlElem<number | null>;
  proc_deduct: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.covenant_status_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
