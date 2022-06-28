interface IWTServerAgentTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  obj?: XmlElem<any>;
  block?: XmlElem<string>;
  type?: XmlElem<string>;
  run_code_url?: XmlElem<string>;
  run_code?: XmlElem<string>;
  run_agent?(iObjectIDParam: any, sObjectsIDsParam: any, sTenancyNameParam: string, dDateParam: Date): boolean;
  discharge_id?: XmlElem<number>;
  user_assignment_id?: XmlElem<number>;
  import_excel_person_scheme_id?: XmlElem<string>;
  import_excel_id?: XmlElem<number>;
  exchange_server_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  converter?: XmlElem<boolean>;
}

type IWTServerAgentDocument = IWTXmlDocument<IWTServerAgentTopElem>;
