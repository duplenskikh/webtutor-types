interface ViewTestByDepartReportDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface ViewTestByDepartReportDocumentOrg {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
}

interface ViewTestByDepartReportDocumentSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

type ViewTestByDepartReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewTestByDepartReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  persons: XmlMultiElem<ViewTestByDepartReportDocumentPerson>;
  orgs: XmlMultiElem<ViewTestByDepartReportDocumentOrg>;
  subdivisions: XmlMultiElem<ViewTestByDepartReportDocumentSubdivision>;
  disp_aggregated_list_string: XmlElem<string>;
  disp_aggregated_list: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  flag_open_org_sub_section: XmlElem<boolean>;
  disp_only_exceeded: XmlElem<boolean>;
  exceed_date: XmlElem<Date>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  sort_type_id: XmlElem<string>;
  sort_type_aggregated_id: XmlElem<string>;
  data: XmlElem<TableDataBase>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  disp_answers: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
};

type ViewTestByDepartReportDocument = XmlDocument & {
  TopElem: ViewTestByDepartReportDocumentTopElem;
  view_test_by_depart_report: ViewTestByDepartReportDocumentTopElem;
  OnInit(): void;
};
