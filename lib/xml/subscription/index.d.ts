type SubscriptionDocumentTopElem = XmlTopElem & { Doc: SubscriptionDocument } & 
  CustomElemsBase &
  AdminAccessBase & {
  create_date?: XmlElem<Date>;
  type?: XmlElem<string>;
  document_id?: XmlElem<number>;
  include_subdocs?: XmlElem<boolean>;
  date_to?: XmlElem<Date>;
  date_last_action?: XmlElem<Date>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
}

type SubscriptionDocument = XmlDocument & { TopElem: SubscriptionDocumentTopElem; };
