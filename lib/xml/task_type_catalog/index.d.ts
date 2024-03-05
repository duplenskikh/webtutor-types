type TaskTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  create_task_type_id: XmlElem<string, typeof common.create_task_types>;
  edit_task_type_id: XmlElem<string, typeof common.edit_task_types>;
  view_task_type_id: XmlElem<string, typeof common.view_task_types>;
  show_in_workspace: XmlElem<boolean>;
  related_to_projects: XmlElem<boolean>;
  related_object_type: XmlElem<string, typeof common.exchange_object_types>;
  virtual: XmlElem<boolean>;
  virtual_remote_collection_id: XmlElem<number, RemoteCollectionCatalogDocumentTopElem>;
  virtual_remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  can_change_status: XmlElem<boolean>;
  can_change_task: XmlElem<boolean>;
  can_delete_task: XmlElem<boolean>;
  related_conversation_type_id: XmlElem<number, ConversationTypeCatalogDocumentTopElem>;
  use_custom_wvars: XmlElem<boolean>;
  consider_time_in_workspace: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  OnBuild(): unknown;
};
