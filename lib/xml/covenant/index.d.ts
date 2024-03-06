type CovenantDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CostCurrencyBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CovenantDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  signatory_employer_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string>;
  date: XmlElem<Date>;
  close_date: XmlElem<Date>;
  period_work: XmlElem<number>;
  proc_pay_bank: XmlElem<number>;
  proc_pay_collab: XmlElem<number>;
  sum_pay_bank(): unknown;
  sum_pay_collab(): unknown;
  proc_deduct: XmlElem<number>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  place: XmlElem<string>;
  comment: XmlElem<string>;
  status_id: XmlElem<string, typeof common.covenant_status_types>;
  doc_info: XmlElem<DocInfoBase>;
};

type CovenantDocument = XmlDocument & {
  TopElem: CovenantDocumentTopElem;
  covenant: CovenantDocumentTopElem;
  DocDesc(): unknown;
};
