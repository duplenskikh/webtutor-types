type ObjectDataCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  object_data_type_id: XmlElem<number | null, ObjectDataTypeCatalogDocumentTopElem>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  /** Статус */
  status_id: XmlElem<string, typeof common.request_status_types>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number | null>;
  sec_object_name: XmlElem<string | null>;
  data_str: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
