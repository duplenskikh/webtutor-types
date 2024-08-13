type SubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SubscriptionDocument;
  create_date: XmlElem<Date | null>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  document_id: XmlElem<number | null>;
  include_subdocs: XmlElem<boolean>;
  date_to: XmlElem<Date | null>;
  date_last_action: XmlElem<Date | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type SubscriptionDocument = XmlDocument & {
  TopElem: SubscriptionDocumentTopElem;
  subscription: SubscriptionDocumentTopElem;
  DocDesc(): string;
};
