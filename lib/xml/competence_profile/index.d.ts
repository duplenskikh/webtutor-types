interface IWTCompetenceProfileRole {
  role_code?: XmlElem<string>;
}

interface IWTCompetenceProfileEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTCompetenceProfileCompetenceDevelopmentMethod {
  development_method_id?: XmlElem<number>;
}

interface IWTCompetenceProfileCompetence
  // extends role_weights_base <INHERIT TYPE="role_weights_base"/>
  {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  plan_text?: XmlElem<string>;
  plan_value?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
  type?: XmlElem<string>;
  education_methods?: XmlMultiElem<IWTCompetenceProfileEducationMethod>;
  development_methods?: XmlMultiElem<IWTCompetenceProfileCompetenceDevelopmentMethod>;
}

interface IWTCompetenceProfileTopElem extends IWTObjectCodeNameBase,
  IWTFileListBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  AdminAccessBase {
  roles?: XmlMultiElem<IWTCompetenceProfileRole>;
  competences?: XmlMultiElem<IWTCompetenceProfileCompetence>;
  education_methods?: XmlMultiElem<IWTCompetenceProfileEducationMethod>;
  assessments?: XmlMultiElem<IWTCompetenceProfileAssessment>;
  access_role?: XmlElem<string>;
  position_commons?: XmlMultiElem<IWTCompetenceProfilePositionCommon>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  update_values?(): any
  role_id?: XmlMultiElem<number>;
}

type IWTCompetenceProfileDocument = XmlDocument<IWTCompetenceProfileTopElem>;
