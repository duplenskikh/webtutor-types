type DocumentCommentEntryDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DocumentCommentEntryDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата */
  create_date: XmlElem<Date | null>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  /** Сотрудник */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Форум */
  portal_doc_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Корневая статья форума */
  parent_document_entry_id: XmlElem<number | null, DocumentCommentEntryCatalogDocumentTopElem>;
  /** Тело статьи */
  text_area: XmlElem<string | null>;
  author_info(personTopElem: unknown): never | string | XmlElem<string>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DocumentCommentEntryDocument = XmlDocument & {
  TopElem: DocumentCommentEntryDocumentTopElem;
  document_comment_entry: DocumentCommentEntryDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
