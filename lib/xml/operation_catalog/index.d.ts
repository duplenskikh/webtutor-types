type OperationCatalogDocumentTopElem = XmlTopElem & { Doc: OperationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  operation_type: XmlElem<number>;
  action: XmlElem<string>;
  operation_catalog_list: XmlElem<string>;
  object_name: XmlElem<string>;
  group: XmlElem<string>;
  is_system: XmlElem<boolean>;
  remote_action_id: XmlElem<number>;
  use_access_eval: XmlElem<boolean>;
  use_script: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  priority: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OperationCatalogDocument = XmlDocument & { TopElem: OperationCatalogDocumentTopElem; };
