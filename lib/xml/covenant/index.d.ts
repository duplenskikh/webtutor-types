interface CovenantView {
  selector?: XmlElem<string>;
}

interface CovenantTopElem extends XmlTopElem<CovenantDocument>, MsPersonSdBase, CostCurrencyBase, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  signatory_employer_id?: XmlElem<number>;
  number?: XmlElem<string>;
  date?: XmlElem<Date>;
  close_date?: XmlElem<Date>;
  period_work?: XmlElem<number>;
  proc_pay_bank?: XmlElem<number>;
  proc_pay_collab?: XmlElem<number>;
  sum_pay_bank?: XmlElem<number>;
  sum_pay_collab?: XmlElem<number>;
  proc_deduct?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  education_org_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  place?: XmlElem<string>;
  comment?: XmlElem<string>;
  status_id?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<CovenantView>;
}

type CovenantDocument = XmlDocument<CovenantTopElem>;
