type GoodInstanceDocumentTopElem = XmlTopElem & { Doc: GoodInstanceDocument } & 
ObjectCodeNameBase &
PersonFillingBase & {
  status?: XmlElem<string>;
  good_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  reserved_date?: XmlElem<Date>;
  paid_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  clear_status?(): unknown;
}

type GoodInstanceDocument = XmlDocument & { TopElem: GoodInstanceDocumentTopElem; };
