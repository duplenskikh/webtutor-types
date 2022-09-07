type PaymentTypeDocumentTopElem = XmlTopElem & { Doc: PaymentTypeDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type PaymentTypeDocument = XmlDocument & { TopElem: PaymentTypeDocumentTopElem; };
