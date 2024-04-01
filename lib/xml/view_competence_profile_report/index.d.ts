interface ViewCompetenceProfileReportDocumentLine {
  line_id: XmlElem<string>;
  line_colour: XmlElem<string>;
}

interface ViewCompetenceProfileReportDocumentPasListPaList {
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  pa_values: XmlElem<string>;
}

interface ViewCompetenceProfileReportDocumentPasList {
  pa_list: XmlElem<ViewCompetenceProfileReportDocumentPasListPaList>;
}

interface ViewCompetenceProfileReportDocumentCompetencePa {
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  value: XmlElem<string>;
}

interface ViewCompetenceProfileReportDocumentCompetence {
  competence_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  value: XmlElem<string>;
  pas: XmlMultiElem<ViewCompetenceProfileReportDocumentCompetencePa>;
}

type ViewCompetenceProfileReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceProfileReportDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  lines: XmlMultiElem<ViewCompetenceProfileReportDocumentLine>;
  disp_legend: XmlElem<boolean>;
  chart_id: XmlElem<string, typeof common.charts>;
  flag_showvalues: XmlElem<boolean>;
  plot_type: XmlElem<string>;
  competence_list: XmlElem<string>;
  competence_values_list: XmlElem<string>;
  pas_list: XmlElem<ViewCompetenceProfileReportDocumentPasList>;
  competences: XmlMultiElem<ViewCompetenceProfileReportDocumentCompetence>;
};

type ViewCompetenceProfileReportDocument = XmlDocument & {
  TopElem: ViewCompetenceProfileReportDocumentTopElem;
  view_competence_profile_report: ViewCompetenceProfileReportDocumentTopElem;
  OnLocalInit(): void;
};
