interface IWTEducationTypeTopElem extends IWTObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<IWTAccessDocBase>;
}

type IWTEducationTypeDocument = XmlDocument<IWTEducationTypeTopElem>;
