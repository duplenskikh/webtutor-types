interface UserDataTopElem extends XmlTopElem<UserDataDocument> {
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  delete_date?: XmlElem<Date>;
  data?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  creation_date?(): any;
}

type UserDataDocument = XmlDocument<UserDataTopElem>;
