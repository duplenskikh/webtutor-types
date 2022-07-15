interface InvoiceCourse {
  course_id?: XmlElem<number>;
  price?: XmlElem<number>;
  units_num?: XmlElem<number>;
}

interface InvoiceTopElem extends XmlTopElem<InvoiceDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  date?: XmlElem<Date>;
  is_paid?: XmlElem<boolean>;
  amount?: XmlElem<number>;
  org_id?: XmlElem<number>;
  transaction_id?: XmlElem<number>;
  request_id?: XmlElem<number>;
  total_price?: XmlElem<number>;
  essentials?: XmlElem<EssentialBase>;
  draft_num?: XmlElem<string>;
  draft_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  courses?: XmlMultiElem<InvoiceCourse>;
}

type InvoiceDocument = XmlDocument<InvoiceTopElem>;
