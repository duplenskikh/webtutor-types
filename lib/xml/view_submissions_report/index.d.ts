interface ViewSubmissionsReportDocumentSubmission {
  submission_id: XmlElem<number, SubmissionCatalogDocumentTopElem>;
  submission_name: XmlElem<string>;
  type_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  fullname: XmlElem<string>;
  position_name: XmlElem<string>;
  position_parent_name: XmlElem<string>;
  phase_name: XmlElem<string>;
  date_finish: XmlElem<Date>;
}

type ViewSubmissionsReportDocumentTopElem = XmlTopElem & {
  Doc: ViewSubmissionsReportDocument;
  submission_type_id: XmlElem<number, SubmissionTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  submissions: XmlMultiElem<ViewSubmissionsReportDocumentSubmission>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewSubmissionsReportDocument = XmlDocument & {
  TopElem: ViewSubmissionsReportDocumentTopElem;
  view_submissions_report: ViewSubmissionsReportDocumentTopElem;
};
