type ForumThemeReadByCollaboratorDocumentTopElem = XmlTopElem & {
  Doc: ForumThemeReadByCollaboratorDocument;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  forum_theme_id: XmlElem<number, ForumEntryCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type ForumThemeReadByCollaboratorDocument = XmlDocument & {
  TopElem: ForumThemeReadByCollaboratorDocumentTopElem;
  forum_theme_read_by_collaborator: ForumThemeReadByCollaboratorDocumentTopElem;
  DocDesc(): string;
};
