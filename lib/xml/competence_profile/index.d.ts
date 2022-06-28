interface IWTCompetenceProfileTopElem extends IWTObjectCodeNameBase,
  IWTFileListBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTAdminAccessBase {
  roles?: XmlMultiElem<IWTCompetenceProfileRole>;
  competences?: XmlMultiElem<IWTCompetenceProfileCompetence>;
  education_methods?: XmlMultiElem<IWTCompetenceProfileEducationMethod>;
  assessments?: XmlMultiElem<IWTCompetenceProfileAssessment>;
  access_role?: XmlElem<string>;
  position_commons?: XmlMultiElem<IWTCompetenceProfilePositionCommon>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  update_values?(): any
  role_id?: XmlMultiElem<number>;
}

type IWTCompetenceProfileDocument = IWTXmlDocument<IWTCompetenceProfileTopElem>;
