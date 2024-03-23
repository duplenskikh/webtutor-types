type WorkspaceConfigCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  is_enabled: XmlElem<boolean>;
  labels_file_url: XmlElem<string>;
  default_theme_id: XmlElem<string, typeof common.workspace_themes>;
  show_conversation: XmlElem<boolean>;
  show_calendar: XmlElem<boolean>;
  show_task: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
