type UserDataDocumentTopElem = XmlTopElem & { Doc: UserDataDocument } & {
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  creation_date?(): unknown;
  delete_date?: XmlElem<Date>;
  data?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type UserDataDocument = XmlDocument & { TopElem: UserDataDocumentTopElem; };
