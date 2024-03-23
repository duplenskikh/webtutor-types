type ForumThemeReadByCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  forum_theme_id: XmlElem<number, ForumEntryCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
