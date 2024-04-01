interface DlgViewTestReportDocumentDispColumns {
  question: XmlElem<boolean>;
  correct: XmlElem<boolean>;
  points: XmlElem<boolean>;
  user_variant: XmlElem<boolean>;
  correct_variant: XmlElem<boolean>;
  elapsed: XmlElem<boolean>;
  variants: XmlElem<boolean>;
  type: XmlElem<boolean>;
  comment: XmlElem<boolean>;
}

type DlgViewTestReportDocumentTopElem = XmlTopElem & {
  Doc: DlgViewTestReportDocument;
  title: XmlElem<string>;
  lesson_report: XmlElem<string>;
  assessment_id: XmlElem<number>;
  obj_id: XmlElem<string>;
  variant: XmlElem<unknown>;
  annals_variant: XmlElem<unknown>;
  disp_answers: XmlElem<string>;
  tab_selector: XmlElem<string>;
  disp_data: XmlElem<boolean>;
  disp_columns: XmlElem<DlgViewTestReportDocumentDispColumns>;
  set_disp_columns(): unknown;
};

type DlgViewTestReportDocument = XmlDocument & {
  TopElem: DlgViewTestReportDocumentTopElem;
  dlg_view_test_report: DlgViewTestReportDocumentTopElem;
};
