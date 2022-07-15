interface ForumThemeReadByCollaboratorTopElem extends XmlTopElem<ForumThemeReadByCollaboratorDocument> {
  forum_id?: XmlElem<number>;
  forum_theme_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
}

type ForumThemeReadByCollaboratorDocument = XmlDocument<ForumThemeReadByCollaboratorTopElem>;
