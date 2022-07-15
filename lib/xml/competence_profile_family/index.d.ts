interface CompetenceProfileFamilyCompetenceProfile {
  competence_profile_id?: XmlElem<number>;
}

interface CompetenceProfileFamilyView {
  selector?: XmlElem<string>;
}

interface CompetenceProfileFamilyTopElem extends XmlTopElem<CompetenceProfileFamilyDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  competence_profiles?: XmlMultiElem<CompetenceProfileFamilyCompetenceProfile>;
  view?: XmlElem<CompetenceProfileFamilyView>;
}

type CompetenceProfileFamilyDocument = XmlDocument<CompetenceProfileFamilyTopElem>;
