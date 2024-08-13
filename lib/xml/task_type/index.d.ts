interface TaskTypeDocumentRole {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface TaskTypeDocumentCustomState {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  workflow_state: XmlElem<string | null>;
  workflow_action_id: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.task_statuses>;
}

interface TaskTypeDocumentParentTaskBlockParentTaskState {
  state_id: XmlElem<string | null, typeof common.task_statuses>;
}

interface TaskTypeDocumentParentTaskBlock {
  parent_task_type_id: XmlElem<number | null, TaskTypeCatalogDocumentTopElem>;
  mandatory_parent_task: XmlElem<boolean>;
  parent_task_states: XmlMultiElem<TaskTypeDocumentParentTaskBlockParentTaskState | null>;
}

interface TaskTypeDocumentResultBlockSelectedField {
  field_id: XmlElem<string | null>;
}

interface TaskTypeDocumentResultBlock extends ResultFieldsBase {
  selected_fields: XmlMultiElem<TaskTypeDocumentResultBlockSelectedField | null>;
}

type TaskTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
WebVariablesBase & {
  Doc: TaskTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  eval_code_for_url: XmlElem<string | null>;
  roles: XmlMultiElem<TaskTypeDocumentRole | null>;
  custom_states: XmlMultiElem<TaskTypeDocumentCustomState | null>;
  create_task_type_id: XmlElem<string | null, typeof common.create_task_types>;
  edit_task_type_id: XmlElem<string | null, typeof common.edit_task_types>;
  view_task_type_id: XmlElem<string | null, typeof common.view_task_types>;
  show_in_workspace: XmlElem<boolean>;
  related_to_projects: XmlElem<boolean>;
  related_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  virtual: XmlElem<boolean>;
  virtual_remote_collection_id: XmlElem<number | null, RemoteCollectionCatalogDocumentTopElem>;
  use_custom_wvars: XmlElem<boolean>;
  consider_time_in_workspace: XmlElem<boolean>;
  mandatory_project: XmlElem<boolean>;
  parent_task_block: XmlElem<TaskTypeDocumentParentTaskBlock | null>;
  virtual_remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  can_change_status: XmlElem<boolean>;
  can_change_task: XmlElem<boolean>;
  can_delete_task: XmlElem<boolean>;
  related_conversation_type_id: XmlElem<number | null, ConversationTypeCatalogDocumentTopElem>;
  result_block: XmlElem<TaskTypeDocumentResultBlock | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
};

type TaskTypeDocument = XmlDocument & {
  TopElem: TaskTypeDocumentTopElem;
  task_type: TaskTypeDocumentTopElem;
  DocDesc(): string;
};
