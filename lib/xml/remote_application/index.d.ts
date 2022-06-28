interface IWTRemoteApplicationTopElem extends IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  app_id?: XmlElem<string>;
  credentials?: XmlMultiElem<IWTRemoteApplicationCredential>;
  category_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

type IWTRemoteApplicationDocument = IWTXmlDocument<IWTRemoteApplicationTopElem>;
