interface IWTCompetenceProfileFamilyTopElem extends AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  competence_profiles?: XmlMultiElem<IWTCompetenceProfileFamilyCompetenceProfile>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type IWTCompetenceProfileFamilyDocument = XmlDocument<IWTCompetenceProfileFamilyTopElem>;
