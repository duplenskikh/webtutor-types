type ForumEntryCatalogDocumentTopElem = XmlTopElem & { Doc: ForumEntryCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  closed: XmlElem<boolean>;
  pinned: XmlElem<boolean>;
  how2show: XmlElem<string>;
  author_info: XmlElem<string>;
  user_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  forum_id: XmlElem<number>;
  parent_forum_entry_id: XmlElem<number>;
  main_forum_entry_id: XmlElem<number>;
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  remote_ip: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ForumEntryCatalogDocument = XmlDocument & { TopElem: ForumEntryCatalogDocumentTopElem; };
