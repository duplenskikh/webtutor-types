interface ServerAgentView {
}

interface ServerAgentTopElem extends XmlTopElem<ServerAgentDocument>, MsPeriodityBase, WebVariablesBase, ExecCodeBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  obj?: XmlElem<any>;
  block?: XmlElem<string>;
  type?: XmlElem<string>;
  run_code_url?: XmlElem<string>;
  run_code?: XmlElem<string>;
  discharge_id?: XmlElem<number>;
  user_assignment_id?: XmlElem<number>;
  import_excel_person_scheme_id?: XmlElem<string>;
  import_excel_id?: XmlElem<number>;
  exchange_server_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  converter?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<ServerAgentView>;
  run_agent?(): any;
}

type ServerAgentDocument = XmlDocument<ServerAgentTopElem>;
