interface BasketDocumentGood {
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  number: XmlElem<number>;
  reserved_date: XmlElem<Date>;
}

type BasketDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: BasketDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  goods: XmlMultiElem<BasketDocumentGood>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BasketDocument = XmlDocument & {
  TopElem: BasketDocumentTopElem;
  basket: BasketDocumentTopElem;
  DocDesc(): unknown;
};
