interface DlgQuestionsAnalyticsInfoDocumentAS {
  id: XmlElem<string>;
  title: XmlElem<string>;
}

interface DlgQuestionsAnalyticsInfoDocumentA {
  id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  title: XmlElem<string>;
  ex: XmlElem<boolean>;
  scount: XmlElem<number>;
  ss: XmlMultiElem<DlgQuestionsAnalyticsInfoDocumentAS>;
}

type DlgQuestionsAnalyticsInfoDocumentTopElem = XmlTopElem & {
  Doc: DlgQuestionsAnalyticsInfoDocument;
  as: XmlMultiElem<DlgQuestionsAnalyticsInfoDocumentA>;
};

type DlgQuestionsAnalyticsInfoDocument = XmlDocument & {
  TopElem: DlgQuestionsAnalyticsInfoDocumentTopElem;
  dlg_questions_analytics_info: DlgQuestionsAnalyticsInfoDocumentTopElem;
};
