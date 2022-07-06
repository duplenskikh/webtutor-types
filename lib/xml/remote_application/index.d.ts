interface IWTRemoteApplicationCredential {
  id: XmlElem<number>;
}

interface IWTRemoteApplicationTopElem {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  app_id: XmlElem<string>;
  credentials: XmlMultiElem<IWTRemoteApplicationCredential>;
  access: XmlElem<IWTAccessDocBase>;
  category_id: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<IWTDocInfoBase>;
}

type IWTRemoteApplicationDocument = XmlDocument<IWTRemoteApplicationTopElem>;
