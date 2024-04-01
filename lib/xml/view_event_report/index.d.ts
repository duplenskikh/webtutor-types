interface ViewEventReportDocumentEvent {
  id: XmlElem<number, EventCatalogDocumentTopElem>;
  name: XmlElem<string>;
  start_date: XmlElem<string>;
  finish_date: XmlElem<string>;
  total_cost: XmlElem<string>;
  person_num: XmlElem<number>;
  fact_person_num: XmlElem<number>;
  type_id: XmlElem<string, typeof common.event_types>;
  type_name: XmlElem<string>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  status_name: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_method_name: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  education_org_name: XmlElem<string>;
  lector_names: XmlElem<string>;
}

type ViewEventReportDocumentTopElem = XmlTopElem & {
  Doc: ViewEventReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  disp_type_id: XmlElem<string, typeof common.event_types>;
  disp_status_id: XmlElem<string, typeof common.event_status_types>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  events: XmlMultiElem<ViewEventReportDocumentEvent>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewEventReportDocument = XmlDocument & {
  TopElem: ViewEventReportDocumentTopElem;
  view_event_report: ViewEventReportDocumentTopElem;
  OnInit(): void;
};
