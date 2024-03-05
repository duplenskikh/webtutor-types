type PayPhaseDocumentTopElem = XmlTopElem &
CostCurrencyBase & {
  Doc: PayPhaseDocument;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  nds: XmlElem<number>;
  exemption_nds: XmlElem<string>;
};

type PayPhaseDocument = XmlDocument & {
  TopElem: PayPhaseDocumentTopElem;
};
