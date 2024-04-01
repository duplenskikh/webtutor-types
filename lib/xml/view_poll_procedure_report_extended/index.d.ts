interface ViewPollProcedureReportExtendedDocumentQuestionEntry {
  id: XmlElem<number>;
  value: XmlElem<string>;
  encounters: XmlElem<number>;
  hits: XmlElem<number>;
}

interface ViewPollProcedureReportExtendedDocumentQuestion {
  question_id: XmlElem<number>;
  title: XmlElem<string>;
  type: XmlElem<string, typeof common.poll_types>;
  entries: XmlMultiElem<ViewPollProcedureReportExtendedDocumentQuestionEntry>;
}

interface ViewPollProcedureReportExtendedDocumentPersonPollQuestion {
  question_id: XmlElem<number>;
  title: XmlElem<string>;
  value: XmlElem<string>;
  comment: XmlElem<string>;
}

interface ViewPollProcedureReportExtendedDocumentPersonPoll {
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  name: XmlElem<string>;
  questions: XmlMultiElem<ViewPollProcedureReportExtendedDocumentPersonPollQuestion>;
}

interface ViewPollProcedureReportExtendedDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  polls: XmlMultiElem<ViewPollProcedureReportExtendedDocumentPersonPoll>;
}

type ViewPollProcedureReportExtendedDocumentTopElem = XmlTopElem & {
  Doc: ViewPollProcedureReportExtendedDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  poll_procedure_id: XmlElem<number, PollProcedureCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_select: XmlElem<number>;
  questions: XmlMultiElem<ViewPollProcedureReportExtendedDocumentQuestion>;
  persons: XmlMultiElem<ViewPollProcedureReportExtendedDocumentPerson>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
};

type ViewPollProcedureReportExtendedDocument = XmlDocument & {
  TopElem: ViewPollProcedureReportExtendedDocumentTopElem;
  view_poll_procedure_report_extended: ViewPollProcedureReportExtendedDocumentTopElem;
  OnInit(): void;
};
