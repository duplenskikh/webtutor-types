type BossTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  operations: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  object_type: XmlMultiElemObject<string | null, typeof common.exchange_object_types>;
  operation_id: XmlMultiElemObject<string | null, OperationCatalogDocumentTopElem>;
  OnBuild(): void;
};
