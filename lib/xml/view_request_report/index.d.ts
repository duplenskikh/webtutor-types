interface ViewRequestReportDocumentRequest {
  id: XmlElem<number>;
  code: XmlElem<string>;
  create_date: XmlElem<string>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  request_type_name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  applicant_fullname: XmlElem<string>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  status_name: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  is_group: XmlElem<string>;
}

type ViewRequestReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewRequestReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  data: XmlElem<TableDataBase>;
  requests: XmlMultiElem<ViewRequestReportDocumentRequest>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  catalog_name: XmlElem<string>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  set_sel_action(list: unknown, screen: unknown): unknown;
  rows: XmlElem<unknown>;
  rows_requests: XmlElem<unknown>;
  row_disp_catalog: XmlElem<string>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewRequestReportDocument = XmlDocument & {
  TopElem: ViewRequestReportDocumentTopElem;
  view_request_report: ViewRequestReportDocumentTopElem;
  OnInit(): void;
};
