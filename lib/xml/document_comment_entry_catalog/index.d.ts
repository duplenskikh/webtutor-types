type DocumentCommentEntryCatalogDocumentTopElem = XmlTopElem & { Doc: DocumentCommentEntryCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string>;
  author_info: XmlElem<string>;
  user_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  portal_doc_id: XmlElem<number>;
  parent_document_entry_id: XmlElem<number>;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DocumentCommentEntryCatalogDocument = XmlDocument & { TopElem: DocumentCommentEntryCatalogDocumentTopElem; };
