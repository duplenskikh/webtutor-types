type TransactionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TransactionDocument;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  direction: XmlElem<number>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  account_id: XmlElem<number, AccountCatalogDocumentTopElem>;
  amount: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  objects: XmlMultiElemObject<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TransactionDocument = XmlDocument & {
  TopElem: TransactionDocumentTopElem;
};
