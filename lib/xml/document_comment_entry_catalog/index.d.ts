type DocumentCommentEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  author_info: XmlElem<string>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  portal_doc_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  parent_document_entry_id: XmlElem<number, DocumentCommentEntryCatalogDocumentTopElem>;
  last_create_date: XmlElem<Date>;
  child_num: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
