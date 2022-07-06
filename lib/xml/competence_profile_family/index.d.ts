interface IWTCompetenceProfileFamilyTopElem extends IWTAdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  competence_profiles?: XmlMultiElem<IWTCompetenceProfileFamilyCompetenceProfile>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type IWTCompetenceProfileFamilyDocument = XmlDocument<IWTCompetenceProfileFamilyTopElem>;
