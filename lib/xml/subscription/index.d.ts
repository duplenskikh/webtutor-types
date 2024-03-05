type SubscriptionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: SubscriptionDocument;
  create_date: XmlElem<Date>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  document_id: XmlElem<number>;
  include_subdocs: XmlElem<boolean>;
  date_to: XmlElem<Date>;
  date_last_action: XmlElem<Date>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type SubscriptionDocument = XmlDocument & {
  TopElem: SubscriptionDocumentTopElem;
};
