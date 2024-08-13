type CovenantDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CostCurrencyBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CovenantDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  signatory_employer_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  close_date: XmlElem<Date | null>;
  period_work: XmlElem<number | null>;
  proc_pay_bank: XmlElem<number | null>;
  proc_pay_collab: XmlElem<number | null>;
  sum_pay_bank(): number | null;
  sum_pay_collab(): number | null;
  proc_deduct: XmlElem<number | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  place: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  status_id: XmlElem<string | null, typeof common.covenant_status_types>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CovenantDocument = XmlDocument & {
  TopElem: CovenantDocumentTopElem;
  covenant: CovenantDocumentTopElem;
  DocDesc(): string;
};
