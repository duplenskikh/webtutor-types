interface ForumEntryDocumentPrivilegeCollaborator {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
}

type ForumEntryDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ForumEntryDocument;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  closed: XmlElem<boolean>;
  pinned: XmlElem<boolean | null>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  parent_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  main_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  text_area: XmlElem<string | null>;
  remote_ip: XmlElem<string | null>;
  author_info(personTopElem: unknown): never | string | XmlElem<string>;
  privilege_collaborators: XmlMultiElem<ForumEntryDocumentPrivilegeCollaborator | null>;
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ForumEntryDocument = XmlDocument & {
  TopElem: ForumEntryDocumentTopElem;
  forum_entry: ForumEntryDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
