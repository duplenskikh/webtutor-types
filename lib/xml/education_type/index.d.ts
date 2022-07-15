interface IWTEducationTypeTopElem extends IWTObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type IWTEducationTypeDocument = XmlDocument<IWTEducationTypeTopElem>;
