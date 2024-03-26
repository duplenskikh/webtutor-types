type BossTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  operations: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  object_type: XmlMultiElemObject<string, typeof common.exchange_object_types>;
  operation_id: XmlMultiElemObject<string, OperationCatalogDocumentTopElem>;
  OnBuild(): void;
};
