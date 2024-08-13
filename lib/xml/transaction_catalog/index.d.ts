type TransactionCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  direction: XmlElem<number>;
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  amount: XmlElem<number | null>;
  objects: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
