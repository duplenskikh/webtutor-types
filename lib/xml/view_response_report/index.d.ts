interface ViewResponseReportDocumentEvent {
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  lector_names: XmlElem<string>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  total: XmlElem<number>;
  total_count: XmlElem<number>;
}

interface ViewResponseReportDocumentResponse {
  response_id: XmlElem<number, ResponseCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  total: XmlElem<number>;
  total_count: XmlElem<number>;
}

interface ViewResponseReportDocumentGroup {
  group_id: XmlElem<string>;
  group_name: XmlElem<string>;
  sub_count: XmlElem<number>;
  total: XmlElem<number>;
  total_count: XmlElem<number>;
}

interface ViewResponseReportDocumentFldResponse {
  response_id: XmlElem<number, ResponseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  value: XmlElem<number>;
  text: XmlElem<string>;
}

interface ViewResponseReportDocumentFld {
  fld_id: XmlElem<string>;
  fld_name: XmlElem<string>;
  group_id: XmlElem<string>;
  total: XmlElem<number>;
  total_count: XmlElem<number>;
  responses: XmlMultiElem<ViewResponseReportDocumentFldResponse>;
}

type ViewResponseReportDocumentTopElem = XmlTopElem & {
  Doc: ViewResponseReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_status_id: XmlElem<string, typeof common.event_status_types>;
  disp_person: XmlElem<boolean>;
  events: XmlMultiElem<ViewResponseReportDocumentEvent>;
  responses: XmlMultiElem<ViewResponseReportDocumentResponse>;
  groups: XmlMultiElem<ViewResponseReportDocumentGroup>;
  flds: XmlMultiElem<ViewResponseReportDocumentFld>;
  flds_count(): unknown;
  total: XmlElem<number>;
  total_count: XmlElem<number>;
};

type ViewResponseReportDocument = XmlDocument & {
  TopElem: ViewResponseReportDocumentTopElem;
  view_response_report: ViewResponseReportDocumentTopElem;
};
