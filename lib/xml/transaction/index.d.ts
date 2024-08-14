type TransactionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TransactionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Приход расход */
  direction: XmlElem<number>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Биллинговый счет */
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  /** Сумма */
  amount: XmlElem<number | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Категория */
  objects: XmlMultiElemObject<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type TransactionDocument = XmlDocument & {
  TopElem: TransactionDocumentTopElem;
  transaction: TransactionDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
