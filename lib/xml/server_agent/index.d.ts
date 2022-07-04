/** Объект параметров агента */
declare var Param: Object;
/** ID объекта над которым выполняется агент */
declare var OBJECT_ID: number;
declare var OBJECTS_ID_STR: string;
/** Флаг исполнения кода на клиенте */
declare var LdsIsClient: boolean;
/** Флаг исполнения кода на сервере */
declare var LdsIsServer: boolean;

declare var oData: any;

interface IWTServerAgentTopElem extends IWTMSPeriodityBase,
  IWTWebVariablesBase,
  IWTExecCodeBase,
  IWTCustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  obj?: XmlElem<any>;
  block?: XmlElem<string>;
  type?: XmlElem<string>;
  run_code_url?: XmlElem<string>;
  run_code?: XmlElem<string>;
  run_agent?(
    iObjectIDParam?: any,
    sObjectsIDsParam?: any,
    sTenancyNameParam?: string,
    dDateParam?: Date
  ): boolean;
  discharge_id?: XmlElem<number>;
  user_assignment_id?: XmlElem<number>;
  import_excel_person_scheme_id?: XmlElem<string>;
  import_excel_id?: XmlElem<number>;
  exchange_server_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>
  converter?(): boolean;
  role_id?: XmlMultiElem<number>;
}

type IWTServerAgentDocument = IWTXmlDocument<IWTServerAgentTopElem>;
