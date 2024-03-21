type ServerAgentDocumentTopElem = XmlTopElem &
MsPeriodityBase &
WebVariablesBase &
ExecCodeBase &
CustomElemsBase & {
  Doc: ServerAgentDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  obj: XmlElem<unknown>;
  block: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.server_agent_types>;
  run_code_url: XmlElem<string>;
  run_code: XmlElem<string>;
  run_agent(objectId: number, objectsIds: string, date: Date): unknown;
  discharge_id: XmlElem<number, DischargeCatalogDocumentTopElem>;
  user_assignment_id: XmlElem<number, UserAssignmentCatalogDocumentTopElem>;
  import_excel_person_scheme_id: XmlElem<string, typeof lists.import_excel_person_schemes>;
  import_excel_id: XmlElem<number>;
  exchange_server_id: XmlElem<number, ExchangeServerCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type ServerAgentDocument = XmlDocument & {
  TopElem: ServerAgentDocumentTopElem;
  server_agent: ServerAgentDocumentTopElem;
  OnLoad_____(): unknown;
  DocDesc(): unknown;
};
