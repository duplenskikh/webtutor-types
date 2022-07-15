interface SubscriptionView {
  selector?: XmlElem<string>;
}

interface SubscriptionTopElem extends XmlTopElem<SubscriptionDocument>, MsPersonSdBase, CustomElemsBase, AdminAccessBase {
  create_date?: XmlElem<Date>;
  type?: XmlElem<string>;
  document_id?: XmlElem<number>;
  include_subdocs?: XmlElem<boolean>;
  date_to?: XmlElem<Date>;
  date_last_action?: XmlElem<Date>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  view?: XmlElem<SubscriptionView>;
}

type SubscriptionDocument = XmlDocument<SubscriptionTopElem>;
