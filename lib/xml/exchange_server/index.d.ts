interface ExchangeServerDocumentExchangeObjectFilter extends ViewConditionsBase {
  scheme_id: XmlElem<string, typeof lists.view_conditions_schemes>;
}

interface ExchangeServerDocumentExchangeObject {
  name: XmlElem<string, typeof common.exchange_object_types>;
  filter: XmlElem<ExchangeServerDocumentExchangeObjectFilter>;
  is_invariable: XmlElem<boolean>;
  xquery_qual: XmlElem<string>;
}

type ExchangeServerDocumentTopElem = XmlTopElem & {
  Doc: ExchangeServerDocument;
  exchange_protocol: XmlElem<string>;
  http_server_url: XmlElem<string>;
  smtp_mail_address: XmlElem<string>;
  smtp_server_url: XmlElem<string>;
  use_smtp_authenticate: XmlElem<boolean>;
  smtp_login: XmlElem<string>;
  smtp_password: XmlElem<string>;
  exchange_type: XmlElem<string, typeof common.upload_types>;
  only_create: XmlElem<boolean>;
  lately_exchange_date: XmlElem<Date>;
  lately_exchange_period: XmlElem<number>;
  limit_count: XmlElem<number>;
  allow_enlarge_period: XmlElem<boolean>;
  exchange_objects_type: XmlElem<string>;
  exchange_objects: XmlMultiElem<ExchangeServerDocumentExchangeObject>;
  use_basic_authenticate: XmlElem<boolean>;
  is_wt_to_wt: XmlElem<boolean>;
  process_deleted_objects: XmlElem<boolean>;
  process_custom_templates: XmlElem<boolean>;
  process_lists: XmlElem<boolean>;
  process_access_roles: XmlElem<boolean>;
  exchange_object_select_type: XmlElem<string>;
  filter_text: XmlElem<string>;
  is_invariable: XmlElem<boolean>;
  process_eval: XmlElem<string>;
};

type ExchangeServerDocument = XmlDocument & {
  TopElem: ExchangeServerDocumentTopElem;
};
