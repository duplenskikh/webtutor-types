type ObjectDataCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_data_type_id: XmlElem<number | null, ObjectDataTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  create_date: XmlElem<Date | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number | null>;
  sec_object_name: XmlElem<string | null>;
  data_str: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
