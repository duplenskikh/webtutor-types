interface TransactionView {
  is_create?: XmlElem<boolean>;
}

interface TransactionTopElem extends XmlTopElem<TransactionDocument>, PersonFillingBase, ObjectTypeBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  date?: XmlElem<Date>;
  direction?: XmlElem<number>;
  org_id?: XmlElem<number>;
  account_id?: XmlElem<number>;
  amount?: XmlElem<number>;
  person_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  objects?: XmlMultiElem<number>;
  view?: XmlElem<TransactionView>;
}

type TransactionDocument = XmlDocument<TransactionTopElem>;
