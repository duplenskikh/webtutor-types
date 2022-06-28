interface IWTCompetenceTopElem extends IWTObjectCodeNameBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTFileListBase,
  IWTAdminAccessBase {
  competence_block_id?: XmlElem<number>;
  exercises?: XmlMultiElem<IWTCompetenceExercise>;
  positive_comment?: XmlElem<string>;
  negative_comment?: XmlElem<string>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  role_id?: XmlMultiElem<number>;
}

type IWTCompetenceDocument = IWTXmlDocument<IWTCompetenceTopElem>;
