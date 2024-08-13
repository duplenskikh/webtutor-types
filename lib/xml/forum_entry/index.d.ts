interface ForumEntryDocumentPrivilegeCollaborator {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
}

type ForumEntryDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ForumEntryDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата */
  create_date: XmlElem<Date | null>;
  /** Обсуждение закрыто */
  closed: XmlElem<boolean>;
  /** Закрепить тему */
  pinned: XmlElem<boolean | null>;
  /** Способ отображения */
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
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
  /** Тело статьи */
  text_area: XmlElem<string | null>;
  remote_ip: XmlElem<string | null>;
  author_info(personTopElem: unknown): never | string | XmlElem<string>;
  privilege_collaborators: XmlMultiElem<ForumEntryDocumentPrivilegeCollaborator | null>;
  /** Одобрена модератором */
  is_moder_approved: XmlElem<boolean>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ForumEntryDocument = XmlDocument & {
  TopElem: ForumEntryDocumentTopElem;
  forum_entry: ForumEntryDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
