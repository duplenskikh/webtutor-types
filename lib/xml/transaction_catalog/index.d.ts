type TransactionCatalogDocumentTopElem = XmlTopElem & { Doc: TransactionCatalogDocument } & 
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  direction: XmlElem<number>;
  account_id: XmlElem<number>;
  org_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  amount: XmlElem<number>;
  objects: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type TransactionCatalogDocument = XmlDocument & { TopElem: TransactionCatalogDocumentTopElem; };
