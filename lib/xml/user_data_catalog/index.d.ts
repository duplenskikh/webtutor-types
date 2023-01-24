type UserDataCatalogDocumentTopElem = XmlTopElem & { Doc: UserDataCatalogDocument } & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  delete_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
}

type UserDataCatalogDocument = XmlDocument & { TopElem: UserDataCatalogDocumentTopElem; };
