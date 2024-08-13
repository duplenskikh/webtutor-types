type ForumEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  closed: XmlElem<boolean>;
  pinned: XmlElem<boolean | null>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  author_info: XmlElem<string | null>;
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  parent_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  main_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  remote_ip: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
