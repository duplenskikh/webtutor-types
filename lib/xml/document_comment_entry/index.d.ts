type DocumentCommentEntryDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DocumentCommentEntryDocument;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  portal_doc_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  parent_document_entry_id: XmlElem<number, DocumentCommentEntryCatalogDocumentTopElem>;
  text_area: XmlElem<string>;
  author_info(tePersonParam: unknown): unknown;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type DocumentCommentEntryDocument = XmlDocument & {
  TopElem: DocumentCommentEntryDocumentTopElem;
};
