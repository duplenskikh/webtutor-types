type DocumentCommentEntryDocumentTopElem = XmlTopElem & { Doc: DocumentCommentEntryDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string>;
  user_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  portal_doc_id: XmlElem<number>;
  parent_document_entry_id: XmlElem<number>;
  text_area: XmlElem<string>;
  author_info(): unknown;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type DocumentCommentEntryDocument = XmlDocument & { TopElem: DocumentCommentEntryDocumentTopElem; };
