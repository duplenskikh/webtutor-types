type ResponseTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  basic_desc_field: XmlElem<string>;
  basic_score_field: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
