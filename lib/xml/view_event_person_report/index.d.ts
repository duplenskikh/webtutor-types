type ViewEventPersonReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewEventPersonReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  excel_file_url: XmlElem<string>;
  disp_excel_file_open: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  data: XmlElem<TableDataBase>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  set_sel_action(list: unknown, screen: unknown): unknown;
  disp_type_id: XmlElem<string, typeof common.event_types>;
  disp_status_id: XmlElem<string, typeof common.event_status_types>;
};

type ViewEventPersonReportDocument = XmlDocument & {
  TopElem: ViewEventPersonReportDocumentTopElem;
  view_event_person_report: ViewEventPersonReportDocumentTopElem;
  OnInit(): void;
};
