interface CustomReportDocumentWebSettings {
  table_height: XmlElem<number>;
  default_mode: XmlElem<string>;
}

interface CustomReportDocumentSubscribe {
  on: XmlElem<boolean>;
  days_period: XmlElem<number>;
  format: XmlElem<string>;
}

type CustomReportDocumentTopElem = XmlTopElem &
CustomReportBase & {
  Doc: CustomReportDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  block: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  connect_2_object: XmlElem<string>;
  mode_selector: XmlElem<number>;
  source_binding_object: XmlElem<string>;
  web_settings: XmlElem<CustomReportDocumentWebSettings>;
  subscribe: XmlElem<CustomReportDocumentSubscribe>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  disp_block: XmlElem<MsDispBlockBase>;
  access: XmlElem<AccessDocBase>;
  binding_selection: XmlElem<number>;
  initiator_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  perfomance_cutoff: XmlElem<number>;
  build_report_v2(sTaskIDParam: string, bMetaParam: boolean): unknown;
  buildCustomReportQuery(TOP_ELEM: unknown, sTaskIDParam: string): unknown;
  UI_CoreModeChangeHandler(NewValue: unknown): unknown;
  UI_CoreObjectChangeHandler(fldSource: unknown, NewValue: unknown): unknown;
  SetModeSelector(imode: number): unknown;
};

type CustomReportDocument = XmlDocument & {
  TopElem: CustomReportDocumentTopElem;
  custom_report: CustomReportDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
