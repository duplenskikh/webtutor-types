type UserDataCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  delete_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  creation_user_id: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  modification_user_id: XmlElem<number | null>;
  OnBuild(): void;
};
