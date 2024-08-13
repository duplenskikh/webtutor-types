type StatementActorDocumentTopElem = XmlTopElem & {
  Doc: StatementActorDocument;
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  mbox: XmlElem<string | null>;
  mbox_sha1sum: XmlElem<string | null>;
  openid: XmlElem<string | null>;
  account_home_page: XmlElem<string | null>;
  account_name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementActorDocument = XmlDocument & {
  TopElem: StatementActorDocumentTopElem;
  statement_actor: StatementActorDocumentTopElem;
};
