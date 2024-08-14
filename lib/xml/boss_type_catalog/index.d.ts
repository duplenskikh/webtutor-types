type BossTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Операции */
  operations: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  object_type: XmlMultiElemObject<string | null, typeof common.exchange_object_types>;
  operation_id: XmlMultiElemObject<string | null, OperationCatalogDocumentTopElem>;
  OnBuild(): void;
};
