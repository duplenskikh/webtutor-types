interface CustomReportWebSettings {
  table_height?: XmlElem<number>;
  default_mode?: XmlElem<string>;
}

interface CustomReportSubscribe {
  on?: XmlElem<boolean>;
  days_period?: XmlElem<number>;
  format?: XmlElem<string>;
}

interface CustomReportViewPathSub {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface CustomReportView {
  selector?: XmlElem<string>;
  path_subs?: XmlMultiElem<CustomReportViewPathSub>;
}

interface CustomReportDispBlock extends MsDispBlockBase {
}

interface CustomReportTopElem extends XmlTopElem<CustomReportDocument>, CustomReportBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  block?: XmlElem<string>;
  connect_2_object?: XmlElem<string>;
  mode_selector?: XmlElem<number>;
  source_binding_object?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  binding_selection?: XmlElem<number>;
  initiator_person_id?: XmlElem<number>;
  perfomance_cutoff?: XmlElem<number>;
  disp_block?: XmlElem<MsDispBlockBase>;
  access?: XmlElem<AccessDocBase>;
  web_settings?: XmlElem<CustomReportWebSettings>;
  subscribe?: XmlElem<CustomReportSubscribe>;
  view?: XmlElem<CustomReportView>;
  disp_block?: XmlElem<CustomReportDispBlock>;
  access?: XmlElem<AccessDocBase>;
  build_report_v2?(): any;
  buildCustomReportQuery?(): any;
  UI_CoreModeChangeHandler?(): any;
  UI_CoreObjectChangeHandler?(): any;
  SetModeSelector?(): any;
}

type CustomReportDocument = XmlDocument<CustomReportTopElem>;
