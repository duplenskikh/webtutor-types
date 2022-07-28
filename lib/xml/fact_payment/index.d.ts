type FactPaymentDocumentTopElem = XmlTopElem & { Doc: FactPaymentDocument } & 
  FileListBase &
  CustomElemsBase & {
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  client_org_id: XmlElem<number>;
  agent_org_id: XmlElem<number>;
  client_legal: XmlElem<string>;
  provider_legal: XmlElem<string>;
  agent_legal: XmlElem<string>;
  client_legal_name: XmlElem<string>;
  provider_legal_name: XmlElem<string>;
  agent_legal_name: XmlElem<string>;
  cost_currency_type_id: XmlElem<string>;
  cost_value: XmlElem<number>;
  date: XmlElem<Date>;
  expense_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type FactPaymentDocument = XmlDocument & { TopElem: FactPaymentDocumentTopElem; };
