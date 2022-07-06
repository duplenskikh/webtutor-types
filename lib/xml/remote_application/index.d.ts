interface IWTRemoteApplicationCredential {
  id: XmlElem<number>;
}

interface RemoteApplicationTopElem extends XmlTopElem<RemoteApplicationDocument> {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  app_id: XmlElem<string>;
  credentials: XmlMultiElem<RemoteApplicationTopElem>;
  access: XmlElem<IWTAccessDocBase>;
  category_id: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<IWTDocInfoBase>;
}

type RemoteApplicationDocument = XmlDocument<RemoteApplicationTopElem>;
