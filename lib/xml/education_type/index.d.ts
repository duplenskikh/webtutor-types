interface IWTEducationTypeTopElem extends IWTObjectCodeNameBase, IWTAdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  access?: XmlElem<IWTAccessDocBase>;
}

type IWTEducationTypeDocument = IWTXmlDocument<IWTEducationTypeTopElem>;
