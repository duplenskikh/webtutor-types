interface ViewCompetenceGeneralizedReportDocumentCompetenceProfileFamily {
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
}

interface ViewCompetenceGeneralizedReportDocumentCompetenceProfile {
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
}

interface ViewCompetenceGeneralizedReportDocumentCompetenceIsBossScale {
  scale_id: XmlElem<string>;
  count: XmlElem<number>;
}

interface ViewCompetenceGeneralizedReportDocumentCompetenceIsBoss {
  min: XmlElem<number>;
  max: XmlElem<number>;
  scales: XmlMultiElem<ViewCompetenceGeneralizedReportDocumentCompetenceIsBossScale>;
}

interface ViewCompetenceGeneralizedReportDocumentCompetenceIsEmployeeScale {
  scale_id: XmlElem<string>;
  count: XmlElem<number>;
}

interface ViewCompetenceGeneralizedReportDocumentCompetenceIsEmployee {
  min: XmlElem<number>;
  max: XmlElem<number>;
  scales: XmlMultiElem<ViewCompetenceGeneralizedReportDocumentCompetenceIsEmployeeScale>;
}

interface ViewCompetenceGeneralizedReportDocumentCompetence {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  competence_name: XmlElem<string>;
  is_boss: XmlElem<ViewCompetenceGeneralizedReportDocumentCompetenceIsBoss>;
  is_employee: XmlElem<ViewCompetenceGeneralizedReportDocumentCompetenceIsEmployee>;
}

type ViewCompetenceGeneralizedReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceGeneralizedReportDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  competence_profile_familys: XmlMultiElem<ViewCompetenceGeneralizedReportDocumentCompetenceProfileFamily>;
  competence_list: XmlElem<string>;
  is_boss_list: XmlElem<string>;
  is_employee_list: XmlElem<string>;
  is_boss_list_max: XmlElem<string>;
  is_employee_list_max: XmlElem<string>;
  is_boss_list_min: XmlElem<string>;
  is_employee_list_min: XmlElem<string>;
  disp_legend: XmlElem<boolean>;
  flag_showvalues: XmlElem<boolean>;
  flag_invert_scale: XmlElem<boolean>;
  competence_profiles: XmlMultiElem<ViewCompetenceGeneralizedReportDocumentCompetenceProfile>;
  competences: XmlMultiElem<ViewCompetenceGeneralizedReportDocumentCompetence>;
  flag_make_word: XmlElem<boolean>;
};

type ViewCompetenceGeneralizedReportDocument = XmlDocument & {
  TopElem: ViewCompetenceGeneralizedReportDocumentTopElem;
  view_competence_generalized_report: ViewCompetenceGeneralizedReportDocumentTopElem;
  OnLocalInit(): void;
};
