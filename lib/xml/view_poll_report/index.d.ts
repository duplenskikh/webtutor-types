interface ViewPollReportDocumentPollQuestionEntry {
  id: XmlElem<number>;
  value: XmlElem<string>;
}

interface ViewPollReportDocumentPollQuestion {
  question_id: XmlElem<number>;
  answers: XmlElem<string>;
  type: XmlElem<string, typeof common.poll_types>;
  comment: XmlElem<string>;
  entries: XmlMultiElem<ViewPollReportDocumentPollQuestionEntry>;
}

interface ViewPollReportDocumentPoll {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  collaborator_fullname: XmlElem<string>;
  questions: XmlMultiElem<ViewPollReportDocumentPollQuestion>;
}

interface ViewPollReportDocumentQuestionEntry {
  id: XmlElem<number>;
  value: XmlElem<string>;
}

interface ViewPollReportDocumentQuestion {
  question_id: XmlElem<number>;
  title: XmlElem<string>;
  entries: XmlMultiElem<ViewPollReportDocumentQuestionEntry>;
}

type ViewPollReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewPollReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  disp_answers: XmlElem<boolean>;
  show_comments_in_report: XmlElem<boolean>;
  is_switched: XmlElem<boolean>;
  polls: XmlMultiElem<ViewPollReportDocumentPoll>;
  collaborator_fullname_has_count: XmlElem<boolean>;
  questions: XmlMultiElem<ViewPollReportDocumentQuestion>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  start_action(type: string): number;
  disp_poll_type: XmlElem<string>;
  catalog_name: XmlElem<string>;
  view_type: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
};

type ViewPollReportDocument = XmlDocument & {
  TopElem: ViewPollReportDocumentTopElem;
  view_poll_report: ViewPollReportDocumentTopElem;
  OnInit(): void;
};
