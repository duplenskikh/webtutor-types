interface PaymentTypeView extends DescBase {
}

interface PaymentTypeTopElem extends XmlTopElem<PaymentTypeDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<PaymentTypeView>;
}

type PaymentTypeDocument = XmlDocument<PaymentTypeTopElem>;
