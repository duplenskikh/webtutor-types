interface ViewQualificationReportDocumentQualification {
  id: XmlElem<number>;
  assignment_date: XmlElem<Date>;
  expiration_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  code: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
}

type ViewQualificationReportDocumentTopElem = XmlTopElem & {
  Doc: ViewQualificationReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  catalog_name: XmlElem<string>;
  assignment_date_start_date: XmlElem<Date>;
  assignment_date_finish_date: XmlElem<Date>;
  expiration_date_start_date: XmlElem<Date>;
  expiration_date_finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  qualifications: XmlMultiElem<ViewQualificationReportDocumentQualification>;
  list_array: XmlElem<unknown>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewQualificationReportDocument = XmlDocument & {
  TopElem: ViewQualificationReportDocumentTopElem;
  view_qualification_report: ViewQualificationReportDocumentTopElem;
  OnInit(): void;
};
