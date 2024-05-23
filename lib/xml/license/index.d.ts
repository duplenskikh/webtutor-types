interface LicenseDocumentCatalog {
  name: XmlElem<string, typeof common.exchange_object_types>;
  max_records_num: XmlElem<number>;
}

interface LicenseDocumentAccessBlockType {
  id: XmlElem<string, typeof common.access_block_types>;
}

interface LicenseDocumentAdditionalKey {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  type_id: XmlElem<string>;
  ident: XmlElem<string>;
  public_key: XmlElem<string>;
}

type LicenseDocumentTopElem = XmlTopElem & {
  Doc: LicenseDocument;
  version_min: XmlElem<string>;
  version_max: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  catalogs: XmlMultiElem<LicenseDocumentCatalog>;
  access_block_types: XmlMultiElem<LicenseDocumentAccessBlockType>;
  additional_keys: XmlMultiElem<LicenseDocumentAdditionalKey>;
  maintaince_date: XmlElem<Date>;
  inventory: XmlElem<boolean>;
  computer_name: XmlElem<string>;
  domain_dns_name: XmlElem<string>;
  domain_short_name: XmlElem<string>;
  user_name: XmlElem<string>;
  end_date: XmlElem<Date>;
  demo: XmlElem<boolean>;
};

type LicenseDocument = XmlDocument & {
  TopElem: LicenseDocumentTopElem;
  license: LicenseDocumentTopElem;
};
