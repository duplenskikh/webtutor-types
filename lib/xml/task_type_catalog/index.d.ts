type TaskTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  create_task_type_id: XmlElem<string | null, typeof common.create_task_types>;
  edit_task_type_id: XmlElem<string | null, typeof common.edit_task_types>;
  view_task_type_id: XmlElem<string | null, typeof common.view_task_types>;
  show_in_workspace: XmlElem<boolean>;
  related_to_projects: XmlElem<boolean>;
  related_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  virtual: XmlElem<boolean>;
  virtual_remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  virtual_remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  can_change_status: XmlElem<boolean>;
  can_change_task: XmlElem<boolean>;
  can_delete_task: XmlElem<boolean>;
  related_conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  use_custom_wvars: XmlElem<boolean>;
  consider_time_in_workspace: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
