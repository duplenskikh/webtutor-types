interface TraningOrderView {
  disp_collarorators?: XmlElem<boolean>;
}

interface TraningOrderTopElem extends XmlTopElem<TraningOrderDocument>, CustomElemsBase {
  number?: XmlElem<string>;
  order_type_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  event_id?: XmlElem<number>;
  education_org_id?: XmlElem<number>;
  essential_id?: XmlElem<string>;
  pay_phase_id?: XmlElem<number>;
  expense_id?: XmlElem<string>;
  cost?: XmlElem<number>;
  currency?: XmlElem<string>;
  status?: XmlElem<string>;
  signing_person_id?: XmlElem<number>;
  responsible_person_id?: XmlElem<number>;
  performer_person_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<TraningOrderView>;
}

type TraningOrderDocument = XmlDocument<TraningOrderTopElem>;
