interface ViewKpiReportDocumentLine {
  line_id: XmlElem<string>;
  line_colour: XmlElem<string>;
}

interface ViewKpiReportDocumentParticipantsListParticipantList {
  participant_id: XmlElem<string, typeof common.assessment_appraise_participants>;
  participant_values: XmlElem<string>;
}

interface ViewKpiReportDocumentParticipantsList {
  participant_list: XmlElem<ViewKpiReportDocumentParticipantsListParticipantList>;
}

interface ViewKpiReportDocumentKpiParticipant {
  participant_id: XmlElem<string, typeof common.assessment_appraise_participants>;
  mark: XmlElem<number>;
  count: XmlElem<number>;
}

interface ViewKpiReportDocumentKpi {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  participants: XmlMultiElem<ViewKpiReportDocumentKpiParticipant>;
}

type ViewKpiReportDocumentTopElem = XmlTopElem & {
  Doc: ViewKpiReportDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  lines: XmlMultiElem<ViewKpiReportDocumentLine>;
  disp_legend: XmlElem<boolean>;
  chart_id: XmlElem<string, typeof common.charts>;
  flag_showvalues: XmlElem<boolean>;
  plot_type: XmlElem<string>;
  kpi_list: XmlElem<string>;
  participants_list: XmlElem<ViewKpiReportDocumentParticipantsList>;
  kpis: XmlMultiElem<ViewKpiReportDocumentKpi>;
};

type ViewKpiReportDocument = XmlDocument & {
  TopElem: ViewKpiReportDocumentTopElem;
  view_kpi_report: ViewKpiReportDocumentTopElem;
  OnLocalInit(): void;
};
