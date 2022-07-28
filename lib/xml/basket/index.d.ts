interface BasketDocumentGood {
  good_id?: XmlElem<number>;
  number?: XmlElem<number>;
  reserved_date?: XmlElem<Date>;
}

type BasketDocumentTopElem = XmlTopElem & { Doc: BasketDocument } & 
  PersonFillingBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  goods?: XmlMultiElem<BasketDocumentGood>;
  currency_type_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type BasketDocument = XmlDocument & { TopElem: BasketDocumentTopElem; };
