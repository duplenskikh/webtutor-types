interface ExchangeBaseExchangeObjectFilter extends ViewConditionsBase {
  scheme_id: XmlElem<string, typeof lists.view_conditions_schemes>;
}

interface ExchangeBaseExchangeObject {
  name: XmlElem<string, typeof common.exchange_object_types>;
  filter: XmlElem<ExchangeBaseExchangeObjectFilter>;
  is_invariable: XmlElem<boolean>;
  xquery_qual: XmlElem<string>;
}

interface ExchangeBase {
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
  exchange_objects: XmlMultiElem<ExchangeBaseExchangeObject>;
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
}

interface ExchangeServerDocumentDownload extends ExchangeBase {
  take_dest_modification_date: XmlElem<boolean>;
}

interface ExchangeServerDocumentUpload extends ExchangeBase {
  clear_resource_data: XmlElem<boolean>;
}

type ExchangeServerDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ExchangeServerDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  server_password: XmlElem<string>;
  is_active: XmlElem<boolean>;
  download: XmlElem<ExchangeServerDocumentDownload>;
  update_exist_package_obj: XmlElem<boolean>;
  auto_publish_test: XmlElem<boolean>;
  upload: XmlElem<ExchangeServerDocumentUpload>;
  last_upload_date: XmlElem<Date>;
  last_download_date: XmlElem<Date>;
  server_version: XmlElem<string>;
  allow_receive_data: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type ExchangeServerDocument = XmlDocument & {
  TopElem: ExchangeServerDocumentTopElem;
  exchange_server: ExchangeServerDocumentTopElem;
  DocDesc(): unknown;
};
