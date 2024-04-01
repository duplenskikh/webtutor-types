interface ViewCompetenceBySatisfactionPercentDocumentPGroup {
  p_group_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  name: XmlElem<string>;
  percentage_criteria: XmlElem<number>;
  amount_list: XmlElem<string>;
  show: XmlElem<boolean>;
}

interface ViewCompetenceBySatisfactionPercentDocumentPersonPGroup {
  p_group_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  name: XmlElem<string>;
  result: XmlElem<number>;
  count: XmlElem<number>;
  percent: XmlElem<number>;
  percent_view(): unknown;
}

interface ViewCompetenceBySatisfactionPercentDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  fullname: XmlElem<string>;
  position_name: XmlElem<string>;
  subdivision_name: XmlElem<string>;
  is_boss: XmlElem<boolean>;
  p_groups: XmlMultiElem<ViewCompetenceBySatisfactionPercentDocumentPersonPGroup>;
  result: XmlElem<number>;
  count: XmlElem<number>;
  percent: XmlElem<number>;
  percent_view(): unknown;
}

type ViewCompetenceBySatisfactionPercentDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceBySatisfactionPercentDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_boss: XmlElem<boolean>;
  percentage_step: XmlElem<number>;
  percentage_criteria: XmlElem<number>;
  p_groups: XmlMultiElem<ViewCompetenceBySatisfactionPercentDocumentPGroup>;
  percentage_scale_list: XmlElem<string>;
  amount_list: XmlElem<string>;
  show: XmlElem<boolean>;
  disp_legend: XmlElem<boolean>;
  flag_showvalues: XmlElem<boolean>;
  flag_invert_scale: XmlElem<boolean>;
  persons: XmlMultiElem<ViewCompetenceBySatisfactionPercentDocumentPerson>;
  flag_make_word: XmlElem<boolean>;
};

type ViewCompetenceBySatisfactionPercentDocument = XmlDocument & {
  TopElem: ViewCompetenceBySatisfactionPercentDocumentTopElem;
  view_competence_by_satisfaction_percent: ViewCompetenceBySatisfactionPercentDocumentTopElem;
  OnLocalInit(): void;
};
