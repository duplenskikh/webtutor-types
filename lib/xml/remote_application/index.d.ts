interface RemoteApplicationCredential {
  id?: XmlElem<number>;
}

interface RemoteApplicationTopElem extends XmlTopElem<RemoteApplicationDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  app_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessBase>;
  category_id?: XmlMultiElem<string>;
  credentials?: XmlMultiElem<RemoteApplicationCredential>;
}

type RemoteApplicationDocument = XmlDocument<RemoteApplicationTopElem>;
