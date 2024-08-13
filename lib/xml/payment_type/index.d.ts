type PaymentTypeDocumentTopElem = XmlTopElem & {
  Doc: PaymentTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PaymentTypeDocument = XmlDocument & {
  TopElem: PaymentTypeDocumentTopElem;
  payment_type: PaymentTypeDocumentTopElem;
  DocDesc(): string;
};
