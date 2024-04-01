interface ViewCompetenceByFamilySatisfactionDocumentCompetenceProfileFamilyPerson {
  person_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  result: XmlElem<number>;
}

interface ViewCompetenceByFamilySatisfactionDocumentCompetenceProfileFamily {
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  name: XmlElem<string>;
  result: XmlElem<number>;
  negative_result: XmlElem<number>;
  count: XmlElem<number>;
  persons: XmlMultiElem<ViewCompetenceByFamilySatisfactionDocumentCompetenceProfileFamilyPerson>;
}

type ViewCompetenceByFamilySatisfactionDocumentTopElem = XmlTopElem & {
  Doc: ViewCompetenceByFamilySatisfactionDocument;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  percentage_criteria: XmlElem<number>;
  family_list: XmlElem<string>;
  amount_list: XmlElem<string>;
  negative_amount_list: XmlElem<string>;
  result: XmlElem<number>;
  negative_result: XmlElem<number>;
  count: XmlElem<number>;
  disp_legend: XmlElem<boolean>;
  flag_showvalues: XmlElem<boolean>;
  flag_invert_scale: XmlElem<boolean>;
  positive_color: XmlElem<string>;
  negative_color: XmlElem<string>;
  is_3d: XmlElem<boolean>;
  competence_profile_familys: XmlMultiElem<ViewCompetenceByFamilySatisfactionDocumentCompetenceProfileFamily>;
  flag_make_word: XmlElem<boolean>;
};

type ViewCompetenceByFamilySatisfactionDocument = XmlDocument & {
  TopElem: ViewCompetenceByFamilySatisfactionDocumentTopElem;
  view_competence_by_family_satisfaction: ViewCompetenceByFamilySatisfactionDocumentTopElem;
  OnLocalInit(): void;
};
