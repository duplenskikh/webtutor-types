interface IWTEducationMethodTopElem extends IWTCustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  desc?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
}

type IWTEducationMethodDocument = IWTXmlDocument<IWTEducationMethodTopElem>;
