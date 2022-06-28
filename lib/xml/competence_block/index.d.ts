interface IWTCompetenceBlockTopElem extends IWTAdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type IWTCompetenceBlockDocument = IWTXmlDocument<IWTCompetenceBlockTopElem>;
