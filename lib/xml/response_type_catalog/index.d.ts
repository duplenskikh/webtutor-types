type ResponseTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  basic_desc_field: XmlElem<string | null>;
  basic_score_field: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
