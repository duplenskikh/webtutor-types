type DlgSelectEducationMethodPeriodOptionDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectEducationMethodPeriodOptionDocument;
  period: XmlElem<number>;
};

type DlgSelectEducationMethodPeriodOptionDocument = XmlDocument & {
  TopElem: DlgSelectEducationMethodPeriodOptionDocumentTopElem;
  dlg_select_education_method_period_option: DlgSelectEducationMethodPeriodOptionDocumentTopElem;
};
