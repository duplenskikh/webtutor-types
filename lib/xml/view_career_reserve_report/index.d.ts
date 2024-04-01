type ViewCareerReserveReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewCareerReserveReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  type: XmlElem<string>;
  position_type: XmlElem<string>;
  target_position_name: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  readiness_date_start: XmlElem<Date>;
  readiness_date_finish: XmlElem<Date>;
  status: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  excel_file_url: XmlElem<string>;
  disp_excel_file_open: XmlElem<boolean>;
  is_web_client: XmlElem<boolean>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  data: XmlElem<TableDataBase>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewCareerReserveReportDocument = XmlDocument & {
  TopElem: ViewCareerReserveReportDocumentTopElem;
  view_career_reserve_report: ViewCareerReserveReportDocumentTopElem;
  OnInit(): void;
};
