type ObjectDataTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
