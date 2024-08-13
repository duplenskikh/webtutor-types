type RequestTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_query_qual: XmlElem<string | null>;
  is_group: XmlElem<boolean>;
  forbid_rejection: XmlElem<boolean>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
