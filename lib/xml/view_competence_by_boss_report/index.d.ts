interface ViewCompetenceByBossReportDocumentCompetenceProfileFamily {
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
}

interface ViewCompetenceByBossReportDocumentCompetenceProfile {
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
}

interface ViewCompetenceByBossReportDocumentCompetenceIsBoss {
  min: XmlElem<number>;
  max: XmlElem<number>;
  eq: XmlElem<number>;
}

interface ViewCompetenceByBossReportDocumentCompetenceIsEmployee {
  min: XmlElem<number>;
  max: XmlElem<number>;
  eq: XmlElem<number>;
}

interface ViewCompetenceByBossReportDocumentCompetence {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  competence_name: XmlElem<string>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  block_name: XmlElem<string>;
  is_boss: XmlElem<ViewCompetenceByBossReportDocumentCompetenceIsBoss>;
  is_employee: XmlElem<ViewCompetenceByBossReportDocumentCompetenceIsEmployee>;
}

type ViewCompetenceByBossReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceByBossReportDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  competence_profile_familys: XmlMultiElem<ViewCompetenceByBossReportDocumentCompetenceProfileFamily>;
  competence_profiles: XmlMultiElem<ViewCompetenceByBossReportDocumentCompetenceProfile>;
  competence_list: XmlElem<string>;
  is_boss_list: XmlElem<string>;
  is_employee_list: XmlElem<string>;
  disp_legend: XmlElem<boolean>;
  flag_showvalues: XmlElem<boolean>;
  flag_invert_scale: XmlElem<boolean>;
  is_3d: XmlElem<boolean>;
  is_boss_color: XmlElem<string>;
  is_employee_color: XmlElem<string>;
  competences: XmlMultiElem<ViewCompetenceByBossReportDocumentCompetence>;
  flag_make_word: XmlElem<boolean>;
};

type ViewCompetenceByBossReportDocument = XmlDocument & {
  TopElem: ViewCompetenceByBossReportDocumentTopElem;
  view_competence_by_boss_report: ViewCompetenceByBossReportDocumentTopElem;
  OnLocalInit(): void;
};
