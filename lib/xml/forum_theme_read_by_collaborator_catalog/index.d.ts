type ForumThemeReadByCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  forum_theme_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
