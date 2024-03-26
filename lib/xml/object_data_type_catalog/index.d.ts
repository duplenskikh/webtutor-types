type ObjectDataTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  sec_object_type: XmlElem<string, typeof common.exchange_object_types>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
