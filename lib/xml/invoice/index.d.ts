interface InvoiceDocumentCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  price: XmlElem<number | null>;
  units_num: XmlElem<number>;
}

type InvoiceDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: InvoiceDocument;
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  is_paid: XmlElem<boolean>;
  amount: XmlElem<number | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  transaction_id: XmlElem<number | null, TransactionCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  courses: XmlMultiElem<InvoiceDocumentCourse | null>;
  essentials: XmlElem<EssentialBase | null>;
  draft_num: XmlElem<string | null>;
  draft_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type InvoiceDocument = XmlDocument & {
  TopElem: InvoiceDocumentTopElem;
  invoice: InvoiceDocumentTopElem;
  OnCreate(): void;
  DocDesc(): string;
};
