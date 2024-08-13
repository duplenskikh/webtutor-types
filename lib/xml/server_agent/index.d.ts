type ServerAgentDocumentTopElem = XmlTopElem &
MsPeriodityBase &
WebVariablesBase &
ExecCodeBase &
CustomElemsBase & {
  Doc: ServerAgentDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  obj: XmlElem<unknown | null>;
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.server_agent_types>;
  run_code_url: XmlElem<string | null>;
  run_code: XmlElem<string | null>;
  run_agent(objectId: number, objectsIds: string, date: Date, inPlace: boolean, configuration: string): unknown;
  discharge_id: XmlElem<number | null, DischargeCatalogDocumentTopElem>;
  user_assignment_id: XmlElem<number | null, UserAssignmentCatalogDocumentTopElem>;
  import_excel_person_scheme_id: XmlElem<string | null, typeof lists.import_excel_person_schemes>;
  import_excel_id: XmlElem<number | null>;
  exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type ServerAgentDocument = XmlDocument & {
  TopElem: ServerAgentDocumentTopElem;
  server_agent: ServerAgentDocumentTopElem;
  OnLoad_____(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
