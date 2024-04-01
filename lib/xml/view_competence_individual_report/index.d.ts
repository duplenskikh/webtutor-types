interface ViewCompetenceIndividualReportDocumentCompetenceProfileFamily {
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
}

interface ViewCompetenceIndividualReportDocumentCompetenceProfileStatus {
  status_id: XmlElem<string>;
  status_name: XmlElem<string>;
  value: XmlElem<string>;
  color: XmlElem<string>;
}

interface ViewCompetenceIndividualReportDocumentCompetenceProfile {
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  min: XmlElem<number>;
  eq: XmlElem<number>;
  max: XmlElem<number>;
  competence_list: XmlElem<string>;
  statuses: XmlMultiElem<ViewCompetenceIndividualReportDocumentCompetenceProfileStatus>;
  graph_path: XmlElem<string>;
}

interface ViewCompetenceIndividualReportDocumentCompetenceProfileDataCompetenceStatus {
  status_id: XmlElem<string>;
  mark: XmlElem<string>;
  value: XmlElem<number>;
  count: XmlElem<number>;
}

interface ViewCompetenceIndividualReportDocumentCompetenceProfileDataCompetence {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  competence_name: XmlElem<string>;
  block_name: XmlElem<string>;
  statuses: XmlMultiElem<ViewCompetenceIndividualReportDocumentCompetenceProfileDataCompetenceStatus>;
}

interface ViewCompetenceIndividualReportDocumentCompetenceProfileData {
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  competence_profile_name: XmlElem<string>;
  competences: XmlMultiElem<ViewCompetenceIndividualReportDocumentCompetenceProfileDataCompetence>;
}

type ViewCompetenceIndividualReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceIndividualReportDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  competence_profile_familys: XmlMultiElem<ViewCompetenceIndividualReportDocumentCompetenceProfileFamily>;
  competence_profiles: XmlMultiElem<ViewCompetenceIndividualReportDocumentCompetenceProfile>;
  profile_select_type: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  disp_legend: XmlElem<boolean>;
  flag_showvalues: XmlElem<boolean>;
  flag_invert_scale: XmlElem<boolean>;
  flag_open_color_section: XmlElem<boolean>;
  self_color: XmlElem<string>;
  expert_color: XmlElem<string>;
  profile_color: XmlElem<string>;
  competence_profile_datas: XmlMultiElem<ViewCompetenceIndividualReportDocumentCompetenceProfileData>;
  mark_legend: XmlElem<string>;
  flag_make_word: XmlElem<boolean>;
};

type ViewCompetenceIndividualReportDocument = XmlDocument & {
  TopElem: ViewCompetenceIndividualReportDocumentTopElem;
  view_competence_individual_report: ViewCompetenceIndividualReportDocumentTopElem;
  OnLocalInit(): void;
};
