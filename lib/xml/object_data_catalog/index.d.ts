type ObjectDataCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_data_type_id: XmlElem<number, ObjectDataTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sec_object_type: XmlElem<string, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number>;
  sec_object_name: XmlElem<string>;
  data_str: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
