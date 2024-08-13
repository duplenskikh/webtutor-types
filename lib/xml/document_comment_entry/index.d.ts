type DocumentCommentEntryDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DocumentCommentEntryDocument;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  portal_doc_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  parent_document_entry_id: XmlElem<number | null, DocumentCommentEntryCatalogDocumentTopElem>;
  text_area: XmlElem<string | null>;
  author_info(personTopElem: unknown): never | string | XmlElem<string>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DocumentCommentEntryDocument = XmlDocument & {
  TopElem: DocumentCommentEntryDocumentTopElem;
  document_comment_entry: DocumentCommentEntryDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
