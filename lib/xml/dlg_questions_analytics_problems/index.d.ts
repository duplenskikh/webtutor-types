type DlgQuestionsAnalyticsProblemsDocumentTopElem = XmlTopElem & {
  Doc: DlgQuestionsAnalyticsProblemsDocument;
  problems_text: XmlElem<string>;
};

type DlgQuestionsAnalyticsProblemsDocument = XmlDocument & {
  TopElem: DlgQuestionsAnalyticsProblemsDocumentTopElem;
  dlg_questions_analytics_problems: DlgQuestionsAnalyticsProblemsDocumentTopElem;
};
