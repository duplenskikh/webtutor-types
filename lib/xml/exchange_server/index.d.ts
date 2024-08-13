interface ExchangeBaseExchangeObjectFilter extends ViewConditionsBase {
  scheme_id: XmlElem<string | null, typeof lists.view_conditions_schemes>;
}

interface ExchangeBaseExchangeObject {
  name: XmlElem<string | null, typeof common.exchange_object_types>;
  filter: XmlElem<ExchangeBaseExchangeObjectFilter | null>;
  is_invariable: XmlElem<boolean>;
  xquery_qual: XmlElem<string | null>;
}

interface ExchangeBase {
  exchange_protocol: XmlElem<string>;
  http_server_url: XmlElem<string | null>;
  smtp_mail_address: XmlElem<string | null>;
  smtp_server_url: XmlElem<string | null>;
  use_smtp_authenticate: XmlElem<boolean>;
  smtp_login: XmlElem<string | null>;
  smtp_password: XmlElem<string | null>;
  exchange_type: XmlElem<string, typeof common.upload_types>;
  only_create: XmlElem<boolean>;
  lately_exchange_date: XmlElem<Date | null>;
  lately_exchange_period: XmlElem<number | null>;
  limit_count: XmlElem<number | null>;
  allow_enlarge_period: XmlElem<boolean>;
  exchange_objects_type: XmlElem<string>;
  exchange_objects: XmlMultiElem<ExchangeBaseExchangeObject | null>;
  use_basic_authenticate: XmlElem<boolean>;
  is_wt_to_wt: XmlElem<boolean>;
  process_deleted_objects: XmlElem<boolean>;
  process_custom_templates: XmlElem<boolean>;
  process_lists: XmlElem<boolean>;
  process_access_roles: XmlElem<boolean>;
  exchange_object_select_type: XmlElem<string>;
  filter_text: XmlElem<string | null>;
  is_invariable: XmlElem<boolean>;
  process_eval: XmlElem<string | null>;
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
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  server_password: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  download: XmlElem<ExchangeServerDocumentDownload | null>;
  update_exist_package_obj: XmlElem<boolean>;
  auto_publish_test: XmlElem<boolean>;
  upload: XmlElem<ExchangeServerDocumentUpload | null>;
  last_upload_date: XmlElem<Date | null>;
  last_download_date: XmlElem<Date | null>;
  server_version: XmlElem<string | null>;
  allow_receive_data: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type ExchangeServerDocument = XmlDocument & {
  TopElem: ExchangeServerDocumentTopElem;
  exchange_server: ExchangeServerDocumentTopElem;
  DocDesc(): string;
};
