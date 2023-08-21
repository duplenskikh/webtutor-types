interface CustomReportDocumentWebSettings {
  table_height: XmlElem<number>;
  default_mode: XmlElem<string>;
}

interface CustomReportDocumentSubscribe {
  on: XmlElem<boolean>;
  days_period: XmlElem<number>;
  format: XmlElem<string>;
}

interface IBuildReportV2Result {
  error: number;
  error_text: string;
  i: number;
  count: number;
}

type CustomReportDocumentTopElem = XmlTopElem &
CustomReportBase & {
  Doc: CustomReportDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  block: XmlElem<string>;
  connect_2_object: XmlElem<string>;
  mode_selector: XmlElem<number>;
  source_binding_object: XmlElem<string>;
  web_settings: XmlElem<CustomReportDocumentWebSettings>;
  subscribe: XmlElem<CustomReportDocumentSubscribe>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  disp_block: XmlElem<unknown>;
  access: XmlElem<AccessDocBase>;
  binding_selection: XmlElem<number>;
  initiator_person_id: XmlElem<number>;
  perfomance_cutoff: XmlElem<number>;
  build_report_v2(taskId?: string, meta?: boolean): IBuildReportV2Result;
  buildCustomReportQuery(topElem: XmlTopElem, taskId: string): unknown;
  UI_CoreModeChangeHandler(value: number): void;
  UI_CoreObjectChangeHandler(fieldSource: XmlElem<unknown>, value: unknown): boolean;
  SetModeSelector(mode: number): void;
};

type CustomReportDocument = XmlDocument & {
  TopElem: CustomReportDocumentTopElem;
};
