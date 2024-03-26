type ForumEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  closed: XmlElem<boolean>;
  pinned: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  author_info: XmlElem<string>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  parent_forum_entry_id: XmlElem<number, ForumEntryCatalogDocumentTopElem>;
  main_forum_entry_id: XmlElem<number, ForumEntryCatalogDocumentTopElem>;
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  remote_ip: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
