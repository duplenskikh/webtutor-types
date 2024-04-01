interface ViewCompetenceByFamilyStatReportDocumentCompetenceProfileFamilyPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_boss: XmlElem<boolean>;
}

interface ViewCompetenceByFamilyStatReportDocumentCompetenceProfileFamily {
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  competence_profile_family_name: XmlElem<string>;
  persons: XmlMultiElem<ViewCompetenceByFamilyStatReportDocumentCompetenceProfileFamilyPerson>;
  boss_count: XmlElem<number>;
  employee_count: XmlElem<number>;
}

type ViewCompetenceByFamilyStatReportDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceByFamilyStatReportDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  disp_legend: XmlElem<boolean>;
  flag_showvalues: XmlElem<boolean>;
  competence_profile_familys: XmlMultiElem<ViewCompetenceByFamilyStatReportDocumentCompetenceProfileFamily>;
  boss_count: XmlElem<number>;
  employee_count: XmlElem<number>;
  flag_make_word: XmlElem<boolean>;
};

type ViewCompetenceByFamilyStatReportDocument = XmlDocument & {
  TopElem: ViewCompetenceByFamilyStatReportDocumentTopElem;
  view_competence_by_family_stat_report: ViewCompetenceByFamilyStatReportDocumentTopElem;
  OnLocalInit(): void;
};
