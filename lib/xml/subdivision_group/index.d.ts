interface IWTSubdivisionGroupTopElem extends IWTDocInfo, IWTKnowledgePartsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_dynamic?: XmlElem<boolean>;
  subdivisions?: XmlMultiElem<IWTSubdivisionGroupSubdivisions>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  dynamic_select_person?(clearList?: boolean): void;
}

type IWTSubdivisionGroupDocument = IWTXmlDocument<IWTSubdivisionGroupTopElem>;
