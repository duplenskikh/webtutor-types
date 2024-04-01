type DlgNewPayPhaseDocumentTopElem = XmlTopElem & {
  Doc: DlgNewPayPhaseDocument;
  invoce_number: XmlElem<string>;
  cost: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  date: XmlElem<Date>;
  nds: XmlElem<boolean>;
};

type DlgNewPayPhaseDocument = XmlDocument & {
  TopElem: DlgNewPayPhaseDocumentTopElem;
  dlg_new_pay_phase: DlgNewPayPhaseDocumentTopElem;
};
