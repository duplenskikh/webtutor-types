type ForumThemeReadByCollaboratorCatalogDocumentTopElem = XmlTopElem & { Doc: ForumThemeReadByCollaboratorCatalogDocument } & {
  id: XmlElem<number>;
  forum_id: XmlElem<number>;
  forum_theme_id: XmlElem<number>;
  date: XmlElem<Date>;
  person_id: XmlElem<number>;
}

type ForumThemeReadByCollaboratorCatalogDocument = XmlDocument & { TopElem: ForumThemeReadByCollaboratorCatalogDocumentTopElem; };
