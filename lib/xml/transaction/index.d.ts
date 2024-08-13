type TransactionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TransactionDocument;
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  direction: XmlElem<number>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  amount: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  objects: XmlMultiElemObject<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type TransactionDocument = XmlDocument & {
  TopElem: TransactionDocumentTopElem;
  transaction: TransactionDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
