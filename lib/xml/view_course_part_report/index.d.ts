interface ViewCoursePartReportDocumentCoursePart {
  part_id: XmlElem<string>;
  name: XmlElem<string>;
  sum: XmlElem<number>;
  count: XmlElem<number>;
  avg(): unknown;
  duration: XmlElem<number>;
}

interface ViewCoursePartReportDocumentCoursePersonPart {
  part_id: XmlElem<string>;
  score: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
}

interface ViewCoursePartReportDocumentCoursePerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
  parts: XmlMultiElem<ViewCoursePartReportDocumentCoursePersonPart>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  score: XmlElem<number>;
  learning_id: XmlElem<number>;
}

interface ViewCoursePartReportDocumentCourse {
  course_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  course_code: XmlElem<string>;
  course_name: XmlElem<string>;
  parts: XmlMultiElem<ViewCoursePartReportDocumentCoursePart>;
  persons: XmlMultiElem<ViewCoursePartReportDocumentCoursePerson>;
  sum: XmlElem<number>;
  count: XmlElem<number>;
  avg(): unknown;
}

type ViewCoursePartReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCoursePartReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  param_panel_open: XmlElem<boolean>;
  param_additional_panel_open: XmlElem<boolean>;
  course_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  date_start: XmlElem<Date>;
  date_end: XmlElem<Date>;
  section_number: XmlElem<number>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  courses: XmlMultiElem<ViewCoursePartReportDocumentCourse>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewCoursePartReportDocument = XmlDocument & {
  TopElem: ViewCoursePartReportDocumentTopElem;
  view_course_part_report: ViewCoursePartReportDocumentTopElem;
  OnInit(): void;
};
