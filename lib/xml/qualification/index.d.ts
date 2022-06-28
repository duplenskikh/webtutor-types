interface IWTQualificationTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  courses?: XmlMultiElem<XmlElem<number>>
  assessments?: XmlMultiElem<XmlElem<number>>
}

type IWTQualificationDocument = IWTXmlDocument<IWTQualificationTopElem>;
