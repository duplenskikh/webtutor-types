interface CustomReportDocumentWebSettings {
  table_height: XmlElem<number | null>;
  default_mode: XmlElem<string>;
}

interface CustomReportDocumentSubscribe {
  on: XmlElem<boolean>;
  days_period: XmlElem<number | null>;
  format: XmlElem<string | null>;
}

type CustomReportDocumentTopElem = XmlTopElem &
CustomReportBase & {
  Doc: CustomReportDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  connect_2_object: XmlElem<string | null>;
  mode_selector: XmlElem<number | null>;
  source_binding_object: XmlElem<string | null>;
  web_settings: XmlElem<CustomReportDocumentWebSettings | null>;
  subscribe: XmlElem<CustomReportDocumentSubscribe | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  access: XmlElem<AccessDocBase | null>;
  binding_selection: XmlElem<number>;
  initiator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  perfomance_cutoff: XmlElem<number | null>;
  build_report_v2(taskId: string, meta: boolean): unknown;
  buildCustomReportQuery(tOPELEM: unknown, taskId: string): unknown;
  UI_CoreModeChangeHandler(newValue: unknown): unknown;
  UI_CoreObjectChangeHandler(fieldSource: unknown, newValue: unknown): unknown;
  SetModeSelector(imode: unknown): unknown;
};

type CustomReportDocument = XmlDocument & {
  TopElem: CustomReportDocumentTopElem;
  custom_report: CustomReportDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
