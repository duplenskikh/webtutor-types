interface WorkspaceConfigDocumentThemeBlockTheme {
  theme_id: XmlElem<string, typeof common.workspace_themes>;
}

interface WorkspaceConfigDocumentThemeBlock {
  default_theme_id: XmlElem<string, typeof common.workspace_themes>;
  themes: XmlMultiElem<WorkspaceConfigDocumentThemeBlockTheme>;
}

interface WorkspaceConfigDocumentConversationBlockCollaboratorInfo {
  phone: XmlElem<boolean>;
  email: XmlElem<boolean>;
  position: XmlElem<boolean>;
  subdivision: XmlElem<boolean>;
  birth_date: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentConversationBlockGroupConversation {
  allow_exit: XmlElem<boolean>;
  allow_change_participant: XmlElem<boolean>;
  allow_change_name: XmlElem<boolean>;
  allow_always_change_name: XmlElem<boolean>;
  allow_change_icon: XmlElem<boolean>;
  allow_always_change_icon: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentConversationBlockChat {
  allow_write_message: XmlElem<boolean>;
  allow_reaction: XmlElem<boolean>;
  allow_edit_message: XmlElem<boolean>;
  allow_hide_message_for_yourself: XmlElem<boolean>;
  allow_hide_message: XmlElem<boolean>;
  allow_forward: XmlElem<boolean>;
  allow_write_message_with_aquaint: XmlElem<boolean>;
  allow_write_audio_message: XmlElem<boolean>;
  allow_insert_images_from_clipboard: XmlElem<boolean>;
  allow_insert_images: XmlElem<boolean>;
  allow_insert_files: XmlElem<boolean>;
  max_message_length: XmlElem<number>;
}

interface WorkspaceConfigDocumentConversationBlockCall {
  allow_microphone: XmlElem<boolean>;
  allow_screen_broadcast: XmlElem<boolean>;
  allow_camera: XmlElem<boolean>;
  show_message_member_connect_call: XmlElem<boolean>;
  video_format_id: XmlElem<string, typeof common.video_formats>;
  limit_participant: XmlElem<number>;
  reserve_bitrate: XmlElem<boolean>;
  max_incoming_bitrate: XmlElem<number>;
  max_outgoing_bitrate: XmlElem<number>;
  pagesize: XmlElem<number>;
  use_audio_options: XmlElem<boolean>;
  audio_max_entries: XmlElem<number>;
  audio_min_threshold: XmlElem<number>;
  audio_interval: XmlElem<number>;
}

interface WorkspaceConfigDocumentConversationBlockWebinar {
  limit_tutor: XmlElem<number>;
  limit_participant: XmlElem<number>;
  reserve_bitrate: XmlElem<boolean>;
  max_incoming_bitrate: XmlElem<number>;
  max_outgoing_bitrate: XmlElem<number>;
  use_audio_options: XmlElem<boolean>;
  audio_max_entries: XmlElem<number>;
  audio_min_threshold: XmlElem<number>;
  audio_interval: XmlElem<number>;
}

interface WorkspaceConfigDocumentConversationBlock {
  show_conversation: XmlElem<boolean>;
  allow_create_conversation: XmlElem<boolean>;
  allow_create_call: XmlElem<boolean>;
  allow_advanced_search: XmlElem<boolean>;
  collaborator_visible_type_id: XmlElem<string, typeof common.conversation_visible_types>;
  collaborator_info: XmlElem<WorkspaceConfigDocumentConversationBlockCollaboratorInfo>;
  group_conversation: XmlElem<WorkspaceConfigDocumentConversationBlockGroupConversation>;
  chat: XmlElem<WorkspaceConfigDocumentConversationBlockChat>;
  call: XmlElem<WorkspaceConfigDocumentConversationBlockCall>;
  webinar: XmlElem<WorkspaceConfigDocumentConversationBlockWebinar>;
}

interface WorkspaceConfigDocumentCalendarBlock {
  show_calendar: XmlElem<boolean>;
  show_event: XmlElem<boolean>;
  show_call: XmlElem<boolean>;
  allow_create_event: XmlElem<boolean>;
  allow_create_call: XmlElem<boolean>;
  allow_delete_event: XmlElem<boolean>;
  allow_delete_call: XmlElem<boolean>;
}

interface WorkspaceConfigDocumentTaskBlockTaskType {
  task_type_id: XmlElem<number, TaskTypeCatalogDocumentTopElem>;
}

interface WorkspaceConfigDocumentTaskBlock {
  show_task: XmlElem<boolean>;
  allow_create_task: XmlElem<boolean>;
  allow_edit_task_executor: XmlElem<boolean>;
  allow_change_status_task_executor: XmlElem<boolean>;
  allow_delete_task_assigner: XmlElem<boolean>;
  allow_delete_task_executor: XmlElem<boolean>;
  task_types: XmlMultiElem<WorkspaceConfigDocumentTaskBlockTaskType>;
}

interface WorkspaceConfigDocumentTimeTrackerBlock {
  show_time_tracker: XmlElem<boolean>;
}

type WorkspaceConfigDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: WorkspaceConfigDocument;
  is_enabled: XmlElem<boolean>;
  theme_block: XmlElem<WorkspaceConfigDocumentThemeBlock>;
  labels_file_url: XmlElem<string>;
  portal_title: XmlElem<string>;
  favicon_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  conversation_block: XmlElem<WorkspaceConfigDocumentConversationBlock>;
  calendar_block: XmlElem<WorkspaceConfigDocumentCalendarBlock>;
  task_block: XmlElem<WorkspaceConfigDocumentTaskBlock>;
  time_tracker_block: XmlElem<WorkspaceConfigDocumentTimeTrackerBlock>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
};

type WorkspaceConfigDocument = XmlDocument & {
  TopElem: WorkspaceConfigDocumentTopElem;
  workspace_config: WorkspaceConfigDocumentTopElem;
  DocDesc(): string;
};
