interface StatementActorTopElem extends XmlTopElem<StatementActorDocument> {
  id?: XmlElem<number>;
  path?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  statement_id?: XmlElem<number>;
  mbox?: XmlElem<string>;
  mbox_sha1sum?: XmlElem<string>;
  openid?: XmlElem<string>;
  account_home_page?: XmlElem<string>;
  account_name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type StatementActorDocument = XmlDocument<StatementActorTopElem>;
