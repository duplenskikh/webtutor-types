type TransactionDocumentTopElem = XmlTopElem & { Doc: TransactionDocument } & 
  PersonFillingBase &
  ObjectTypeBase &
  AdminAccessBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  date?: XmlElem<Date>;
  direction?: XmlElem<number>;
  org_id?: XmlElem<number>;
  account_id?: XmlElem<number>;
  amount?: XmlElem<number>;
  person_id?: XmlElem<number>;
  objects?: XmlMultiElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type TransactionDocument = XmlDocument & { TopElem: TransactionDocumentTopElem; };
