interface ForumEntryDocumentPrivilegeCollaborator {
  collaborator_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

type ForumEntryDocumentTopElem = XmlTopElem & { Doc: ForumEntryDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  closed: XmlElem<boolean>;
  pinned: XmlElem<boolean>;
  how2show: XmlElem<string>;
  user_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  forum_id: XmlElem<number>;
  parent_forum_entry_id: XmlElem<number>;
  main_forum_entry_id: XmlElem<number>;
  text_area: XmlElem<string>;
  remote_ip: XmlElem<string>;
  author_info?(): unknown;
  privilege_collaborators: XmlMultiElem<ForumEntryDocumentPrivilegeCollaborator>;
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type ForumEntryDocument = XmlDocument & {
  TopElem: ForumEntryDocumentTopElem;
};
