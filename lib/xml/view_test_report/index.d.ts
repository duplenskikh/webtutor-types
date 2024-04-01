type ViewTestReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewTestReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  excel_file_url: XmlElem<string>;
  disp_excel_file_open: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  data: XmlElem<TableDataBase>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  action_catalog_name: XmlElem<string>;
  start_action(type: string): number;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewTestReportDocument = XmlDocument & {
  TopElem: ViewTestReportDocumentTopElem;
  view_test_report: ViewTestReportDocumentTopElem;
  OnInit(): void;
};
