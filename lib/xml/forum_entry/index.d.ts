interface ForumEntryDocumentPrivilegeCollaborator {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
}

type ForumEntryDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ForumEntryDocument;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  closed: XmlElem<boolean>;
  pinned: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  parent_forum_entry_id: XmlElem<number, ForumEntryCatalogDocumentTopElem>;
  main_forum_entry_id: XmlElem<number, ForumEntryCatalogDocumentTopElem>;
  text_area: XmlElem<string>;
  remote_ip: XmlElem<string>;
  author_info(personTopElem: unknown): unknown;
  privilege_collaborators: XmlMultiElem<ForumEntryDocumentPrivilegeCollaborator>;
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type ForumEntryDocument = XmlDocument & {
  TopElem: ForumEntryDocumentTopElem;
  forum_entry: ForumEntryDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
