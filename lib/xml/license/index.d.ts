interface LicenseDocumentCatalog {
  name: XmlElem<string | null, typeof common.exchange_object_types>;
  max_records_num: XmlElem<number | null>;
}

interface LicenseDocumentAccessBlockType {
  id: XmlElem<string | null, typeof common.access_block_types>;
}

interface LicenseDocumentAdditionalKey {
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  type_id: XmlElem<string | null>;
  ident: XmlElem<string | null>;
  public_key: XmlElem<string | null>;
}

type LicenseDocumentTopElem = XmlTopElem & {
  Doc: LicenseDocument;
  version_min: XmlElem<string>;
  version_max: XmlElem<string>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  catalogs: XmlMultiElem<LicenseDocumentCatalog | null>;
  access_block_types: XmlMultiElem<LicenseDocumentAccessBlockType | null>;
  additional_keys: XmlMultiElem<LicenseDocumentAdditionalKey | null>;
  maintaince_date: XmlElem<Date | null>;
  inventory: XmlElem<boolean>;
  computer_name: XmlElem<string | null>;
  domain_dns_name: XmlElem<string | null>;
  domain_short_name: XmlElem<string | null>;
  user_name: XmlElem<string | null>;
  end_date: XmlElem<Date | null>;
  demo: XmlElem<boolean>;
};

type LicenseDocument = XmlDocument & {
  TopElem: LicenseDocumentTopElem;
  license: LicenseDocumentTopElem;
};
