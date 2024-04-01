interface ViewCourseByDepartReportDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface ViewCourseByDepartReportDocumentOrg {
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
}

interface ViewCourseByDepartReportDocumentSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

type ViewCourseByDepartReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewCourseByDepartReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  persons: XmlMultiElem<ViewCourseByDepartReportDocumentPerson>;
  orgs: XmlMultiElem<ViewCourseByDepartReportDocumentOrg>;
  subdivisions: XmlMultiElem<ViewCourseByDepartReportDocumentSubdivision>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_aggregated_list_string: XmlElem<string>;
  disp_aggregated_list: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  flag_open_org_sub_section: XmlElem<boolean>;
  disp_only_exceeded: XmlElem<boolean>;
  exceed_date: XmlElem<Date>;
  disp_learning_prog: XmlElem<boolean>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  disp_learning_type: XmlElem<string>;
  param_panel_open: XmlElem<boolean>;
  param_additional_panel_open: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  data: XmlElem<TableDataBase>;
  list_array: XmlElem<unknown>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewCourseByDepartReportDocument = XmlDocument & {
  TopElem: ViewCourseByDepartReportDocumentTopElem;
  view_course_by_depart_report: ViewCourseByDepartReportDocumentTopElem;
  OnInit(): void;
};
