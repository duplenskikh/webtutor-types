interface TaskTypeDocumentRole {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface TaskTypeDocumentCustomState {
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_state: XmlElem<string>;
  workflow_action_id: XmlElem<string>;
  state_id: XmlElem<string, typeof common.task_statuses>;
}

interface TaskTypeDocumentParentTaskBlockParentTaskState {
  state_id: XmlElem<string, typeof common.task_statuses>;
}

interface TaskTypeDocumentParentTaskBlock {
  parent_task_type_id: XmlElem<number, TaskTypeCatalogDocumentTopElem>;
  mandatory_parent_task: XmlElem<boolean>;
  parent_task_states: XmlMultiElem<TaskTypeDocumentParentTaskBlockParentTaskState>;
}

type TaskTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
WebVariablesBase & {
  Doc: TaskTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  eval_code_for_url: XmlElem<string>;
  roles: XmlMultiElem<TaskTypeDocumentRole>;
  custom_states: XmlMultiElem<TaskTypeDocumentCustomState>;
  create_task_type_id: XmlElem<string, typeof common.create_task_types>;
  edit_task_type_id: XmlElem<string, typeof common.edit_task_types>;
  view_task_type_id: XmlElem<string, typeof common.view_task_types>;
  show_in_workspace: XmlElem<boolean>;
  related_to_projects: XmlElem<boolean>;
  related_object_type: XmlElem<string, typeof common.exchange_object_types>;
  virtual: XmlElem<boolean>;
  virtual_remote_collection_id: XmlElem<number, RemoteCollectionCatalogDocumentTopElem>;
  use_custom_wvars: XmlElem<boolean>;
  consider_time_in_workspace: XmlElem<boolean>;
  mandatory_project: XmlElem<boolean>;
  parent_task_block: XmlElem<TaskTypeDocumentParentTaskBlock>;
  virtual_remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  can_change_status: XmlElem<boolean>;
  can_change_task: XmlElem<boolean>;
  can_delete_task: XmlElem<boolean>;
  related_conversation_type_id: XmlElem<number, ConversationTypeCatalogDocumentTopElem>;
  result_block: XmlElem<ResultFieldsBase>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
};

type TaskTypeDocument = XmlDocument & {
  TopElem: TaskTypeDocumentTopElem;
};
