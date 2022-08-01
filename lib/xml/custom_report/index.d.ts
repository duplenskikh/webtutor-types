type CustomReportDocumentTopElem = XmlTopElem & { Doc: CustomReportDocument } & 
CustomReportBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  block?: XmlElem<string>;
  connect_2_object?: XmlElem<string>;
  mode_selector?: XmlElem<number>;
  source_binding_object?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  binding_selection?: XmlElem<number>;
  initiator_person_id?: XmlElem<number>;
  perfomance_cutoff?: XmlElem<number>;
  build_report_v2?(): unknown;
  buildCustomReportQuery?(): unknown;
  UI_CoreModeChangeHandler?(): unknown;
  UI_CoreObjectChangeHandler?(): unknown;
  SetModeSelector?(): unknown;
}

type CustomReportDocument = XmlDocument & { TopElem: CustomReportDocumentTopElem; };
