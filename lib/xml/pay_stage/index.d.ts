type PayStageDocumentTopElem = XmlTopElem & { Doc: PayStageDocument } &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  client_org_id: XmlElem<number>;
  sale_contract_id: XmlElem<number>;
  agent_contract_id: XmlElem<number>;
  is_agent_sale_contract: XmlElem<boolean>;
  agent_org_id: XmlElem<number>;
  is_prepayment: XmlElem<boolean>;
  type_id: XmlElem<string>;
  closing_method: XmlElem<string>;
  cost_center_id: XmlElem<number>;
  is_autoclosing: XmlElem<boolean>;
  autoclosing_period: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type PayStageDocument = XmlDocument & {
  TopElem: PayStageDocumentTopElem;
};
