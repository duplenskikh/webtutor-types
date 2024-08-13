interface BasketDocumentGood {
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  number: XmlElem<number>;
  reserved_date: XmlElem<Date | null>;
}

type BasketDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: BasketDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  goods: XmlMultiElem<BasketDocumentGood | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BasketDocument = XmlDocument & {
  TopElem: BasketDocumentTopElem;
  basket: BasketDocumentTopElem;
  DocDesc(): string;
};
