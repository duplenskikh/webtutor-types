interface InvoiceDocumentCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  price: XmlElem<number>;
  units_num: XmlElem<number>;
}

type InvoiceDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: InvoiceDocument;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  is_paid: XmlElem<boolean>;
  amount: XmlElem<number>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  transaction_id: XmlElem<number, TransactionCatalogDocumentTopElem>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  courses: XmlMultiElem<InvoiceDocumentCourse>;
  essentials: XmlElem<EssentialBase>;
  draft_num: XmlElem<string>;
  draft_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type InvoiceDocument = XmlDocument & {
  TopElem: InvoiceDocumentTopElem;
};
