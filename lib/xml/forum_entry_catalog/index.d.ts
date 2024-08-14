type ForumEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Закрытый форум */
  closed: XmlElem<boolean>;
  /** Закрепить тему */
  pinned: XmlElem<boolean | null>;
  /** Способ отображения */
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  author_info: XmlElem<string | null>;
  /** Сотрудник */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Родительская статья форума */
  parent_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  /** Корневая статья формума */
  main_forum_entry_id: XmlElem<number | null, ForumEntryCatalogDocumentTopElem>;
  /** Одобрена модератором */
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  remote_ip: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
