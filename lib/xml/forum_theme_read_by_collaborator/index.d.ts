type ForumThemeReadByCollaboratorDocumentTopElem = XmlTopElem & { Doc: ForumThemeReadByCollaboratorDocument } & {
  forum_id?: XmlElem<number>;
  forum_theme_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
}

type ForumThemeReadByCollaboratorDocument = XmlDocument & { TopElem: ForumThemeReadByCollaboratorDocumentTopElem; };
