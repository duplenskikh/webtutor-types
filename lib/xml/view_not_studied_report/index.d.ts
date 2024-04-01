interface ViewNotStudiedReportDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  fullname: XmlElem<string>;
  code: XmlElem<string>;
  last_usage_date: XmlElem<Date>;
  position_name: XmlElem<string>;
  position_parent_name: XmlElem<string>;
}

type ViewNotStudiedReportDocumentTopElem = XmlTopElem & {
  Doc: ViewNotStudiedReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  learning_type: XmlElem<string>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  hire_date_start: XmlElem<Date>;
  hire_date_finish: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_study: XmlElem<string>;
  disp_learning_type: XmlElem<string>;
  disp_date: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  show_dismiss: XmlElem<boolean>;
  persons: XmlMultiElem<ViewNotStudiedReportDocumentPerson>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  set_sel_action(list: unknown, screen: unknown): unknown;
  is_create: XmlElem<boolean>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewNotStudiedReportDocument = XmlDocument & {
  TopElem: ViewNotStudiedReportDocumentTopElem;
  view_not_studied_report: ViewNotStudiedReportDocumentTopElem;
  OnInit(): void;
};
