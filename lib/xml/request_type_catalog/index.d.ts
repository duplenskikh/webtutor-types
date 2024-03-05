type RequestTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_query_qual: XmlElem<string>;
  is_group: XmlElem<boolean>;
  forbid_rejection: XmlElem<boolean>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
