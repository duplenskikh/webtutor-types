type ServerAgentDocumentTopElem = XmlTopElem &
WebVariablesBase &
ExecCodeBase &
CustomElemsBase & {
  Doc: ServerAgentDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  obj: XmlElem<unknown>;
  block: XmlElem<string>;
  type: XmlElem<string>;
  run_code_url: XmlElem<string>;
  run_code: XmlElem<string>;
  run_agent(): unknown;
  discharge_id: XmlElem<number>;
  user_assignment_id: XmlElem<number>;
  import_excel_person_scheme_id: XmlElem<string>;
  import_excel_id: XmlElem<number>;
  exchange_server_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type ServerAgentDocument = XmlDocument & {
  TopElem: ServerAgentDocumentTopElem;
};
