type OperationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  operation_type: XmlElem<number>;
  action: XmlElem<string>;
  operation_catalog_list: XmlElem<string>;
  object_name: XmlElem<string, typeof common.exchange_object_types>;
  group: XmlElem<string>;
  is_system: XmlElem<boolean>;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  use_script: XmlElem<boolean>;
  use_access_eval: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  priority: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
