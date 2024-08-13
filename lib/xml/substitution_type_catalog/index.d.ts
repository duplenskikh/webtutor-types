type SubstitutionTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null>;
  operation_codes: XmlElem<string | null>;
  /** Категория */
  operation_id: XmlMultiElemObject<number | null, OperationCatalogDocumentTopElem>;
  remote_action_codes: XmlElem<string | null>;
  remote_action_id: XmlMultiElemObject<number | null, RemoteActionCatalogDocumentTopElem>;
  data_str: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  is_active: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
